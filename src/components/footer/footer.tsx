export default function Footer() {
    return (
        <footer className="flex items-center justify-center p-4 border-t  border-t-gray-400">
            <span>© {new Date().getFullYear()}. All Rights Reserved.</span>
        </footer>
    )
}