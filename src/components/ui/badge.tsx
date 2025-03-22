export default function Badge({ text }: { text: string }) {
    return (
        <div className="bg-white/10 backdrop-blur-sm text-black rounded-full px-4 py-2">
            <p>{text}</p>
        </div>
    )
}