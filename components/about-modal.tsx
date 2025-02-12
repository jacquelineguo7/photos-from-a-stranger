import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

interface AboutModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>About This Gallery</DialogTitle>
          <DialogDescription>
            This gallery showcases a collection of photos from an unknown photographer. The images are displayed in a
            masonry layout, creating an visually appealing and dynamic presentation of the artwork.
          </DialogDescription>
        </DialogHeader>
        <p className="mt-4">
          The photographer remains anonymous, adding an air of mystery to the collection. Each image tells its own
          story, inviting viewers to interpret and connect with the visuals in their own unique way.
        </p>
      </DialogContent>
    </Dialog>
  )
}

