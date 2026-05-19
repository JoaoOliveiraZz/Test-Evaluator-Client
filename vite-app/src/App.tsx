import { useRef, useState } from "react"
import { Upload, FileText } from "lucide-react"

import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function App() {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [fileName, setFileName] = useState("")

  const handleClick = () => {
    inputRef.current?.click()
  }

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files

    if (files && files.length > 0) {
      setFileName(files[0].name)
    }
  }

  return (
    <div className="flex items-center justify-center bg-background p-6">
      <Card
        onClick={handleClick}
        className="
          w-full
          max-w-3/4
          h-64
          border-2
          border-dashed
          rounded-2xl
          flex
          flex-col
          items-center
          justify-center
          gap-4
          transition-all
          hover:border-primary
          hover:bg-muted/50
          hover:scale-[1.01]
          cursor-pointer
        "
      >
        <Input
          ref={inputRef}
          type="file"
          accept=".xlsx"
          className="hidden"
          onChange={handleFileChange}
        />

        <div className="p-4 rounded-full bg-primary/10">
          <Upload className="w-10 h-10 text-primary" />
        </div>

        <div className="text-center space-y-1">
          <p className="text-lg font-semibold">
            Upload de arquivo
          </p>

          <p className="text-sm text-muted-foreground">
            Clique para selecionar um arquivo
          </p>
        </div>

        {fileName && (
          <div className="flex items-center gap-2 mt-2 text-sm bg-muted px-3 py-2 rounded-lg">
            <FileText className="w-4 h-4" />
            <span className="truncate max-w-[220px]">
              {fileName}
            </span>
          </div>
        )}
      </Card>
    </div>
  )
}