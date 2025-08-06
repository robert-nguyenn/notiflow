import { CreateEventCategoryModal } from "@/components/create-event-category-modal"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { client } from "@/lib/client"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const DashboardEmptyState = () => {
  const queryClient = useQueryClient()

  const { mutate: insertQuickstartCategories, isPending } = useMutation({
    mutationFn: async () => {
      await client.category.insertQuickstartCategories.$post()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-event-categories"] })
    },
  })

  return (
    <Card className="flex flex-col items-center justify-center rounded-2xl text-center p-12 bg-white border border-gray-200 shadow-sm">
      <div className="flex justify-center w-full mb-6">
        <img
          src="/brand-asset-wave.png"
          alt="No categories"
          className="size-48"
        />
      </div>

      <div className="space-y-3 mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          No Event Categories Yet
        </h1>
        <p className="text-gray-600 max-w-md">
          Start tracking events by creating your first category.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-sm">
        <Button
          variant="outline"
          className="flex items-center gap-2 w-full sm:w-auto"
          onClick={() => insertQuickstartCategories()}
          disabled={isPending}
        >
          <span className="text-base">🚀</span>
          <span>{isPending ? "Creating..." : "Quick Start"}</span>
        </Button>

        <CreateEventCategoryModal containerClassName="w-full sm:w-auto">
          <Button className="flex items-center gap-2 w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            <span>Add Category</span>
          </Button>
        </CreateEventCategoryModal>
      </div>
    </Card>
  )
}
