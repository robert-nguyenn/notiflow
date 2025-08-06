"use client"

import { LoadingSpinner } from "@/components/loading-spinner"
import { Button, buttonVariants } from "@/components/ui/button"
import { Modal } from "@/components/ui/modal"
import { client } from "@/lib/client"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { format, formatDistanceToNow } from "date-fns"
import { ArrowRight, BarChart2, Clock, Database, Trash2 } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { DashboardEmptyState } from "./dashboard-empty-state"

export const DashboardPageContent = () => {
  const [deletingCategory, setDeletingCategory] = useState<string | null>(null)
  const queryClient = useQueryClient()

  const { data: categories, isPending: isEventCategoriesLoading } = useQuery({
    queryKey: ["user-event-categories"],
    queryFn: async () => {
      const res = await client.category.getEventCategories.$get()
      const { categories } = await res.json()
      return categories
    },
  })

  const { mutate: deleteCategory, isPending: isDeletingCategory } = useMutation(
    {
      mutationFn: async (name: string) => {
        await client.category.deleteCategory.$post({ name })
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["user-event-categories"] })
        setDeletingCategory(null)
      }, //fix
    }
  )

  if (isEventCategoriesLoading) {
    return (
      <div className="flex items-center justify-center flex-1 h-full w-full">
        <LoadingSpinner />
      </div>
    )
  }

  if (!categories || categories.length === 0) {
    return <DashboardEmptyState />
  }

  return (
    <>
      <ul className="grid max-w-6xl grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {categories.map((category) => (
          <li
            key={category.id}
            className="relative group z-10 transition-all duration-200 hover:-translate-y-0.5"
          >
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="size-12 rounded-xl flex items-center justify-center border border-gray-200"
                    style={{
                      backgroundColor: category.color
                        ? `#${category.color.toString(16).padStart(6, "0")}`
                        : "#f3f4f6",
                    }}
                  >
                    <span className="text-lg">{category.emoji || "📂"}</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 truncate">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Created {format(category.createdAt, "MMM d, yyyy")}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="size-4 mr-3 text-purple-600" />
                    <span className="font-medium mr-2">Last ping:</span>
                    <span>
                      {category.lastPing
                        ? formatDistanceToNow(category.lastPing) + " ago"
                        : "Never"}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Database className="size-4 mr-3 text-blue-600" />
                    <span className="font-medium mr-2">Unique fields:</span>
                    <span className="font-semibold">{category.uniqueFieldCount || 0}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <BarChart2 className="size-4 mr-3 text-green-600" />
                    <span className="font-medium mr-2">Events this month:</span>
                    <span className="font-semibold">{category.eventsCount || 0}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <Link
                    href={`/dashboard/category/${category.name}`}
                    className={buttonVariants({
                      variant: "outline",
                      size: "sm",
                      className: "flex items-center gap-2 text-sm",
                    })}
                  >
                    View all <ArrowRight className="size-4" />
                  </Link>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-red-600 hover:bg-red-50 transition-all duration-200"
                    aria-label={`Delete ${category.name} category`}
                    onClick={() => setDeletingCategory(category.name)}
                  >
                    <Trash2 className="size-4" />
                  </Button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <Modal
        showModal={!!deletingCategory}
        setShowModal={() => setDeletingCategory(null)}
        className="max-w-md p-8"
      >
        <div className="space-y-6">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
              <Trash2 className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Delete Category
            </h2>
            <p className="text-sm text-gray-600">
              Are you sure you want to delete the category "{deletingCategory}"?
              This action cannot be undone and all associated data will be lost.
            </p>
          </div>

          <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
            <Button 
              variant="outline" 
              onClick={() => setDeletingCategory(null)}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() =>
                deletingCategory && deleteCategory(deletingCategory)
              }
              disabled={isDeletingCategory}
            >
              {isDeletingCategory ? "Deleting..." : "Delete Category"}
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
}
