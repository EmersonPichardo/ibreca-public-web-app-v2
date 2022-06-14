import { ReactNode } from "react"
import Subtitle from "./subtitle"

export class ParagraphProps {
    title?: string
    titleColor?: string
    children?: ReactNode
    columns?: string | number
}

export default function Paragraph({ title, titleColor, children, columns = 'md' }: ParagraphProps) {
    return (
        <div>
            <Subtitle text={title!} color={titleColor!} />
            <div className={`columns-${columns} gap-8 space-y-12 break-words`}>
                {children}
            </div>
        </div>
    )
}