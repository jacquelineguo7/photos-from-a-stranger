import { Button } from "@/components/ui/button"

interface NavbarProps {
  onAboutClick: () => void
}

export default function Navbar({ onAboutClick }: NavbarProps) {
  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h2 className="text-sm font-normal uppercase">Polaris Studio</h2>
        <h1 className="text-sm font-normal uppercase">Stories of a Stranger</h1>
        <Button variant="link" onClick={onAboutClick} className="text-sm font-normal uppercase">
          About the Project
        </Button>
      </div>
    </nav>
  )
}

