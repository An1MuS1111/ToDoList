import { Label } from "@/ui-components/ui/label"
import { Input } from "@/ui-components/ui/input"
import { Button } from "@/ui-components/ui/button"

export default function EditProfile() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-950">
            <div className="mx-auto w-full max-w-md space-y-8 rounded-xl bg-white p-8 shadow-lg dark:bg-gray-900">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Edit Profile</h2>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">Update your personal information.</p>
                </div>
                <form className="space-y-6">
                    <div>
                        <Label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Name
                        </Label>
                        <div className="mt-1">
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                placeholder="Enter your name"
                                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
                            />
                        </div>
                    </div>
                    <div>
                        <Label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Email address
                        </Label>
                        <div className="mt-1">
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                placeholder="name@example.com"
                                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
                            />
                        </div>
                    </div>
                    <div>
                        <Label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Current Password
                        </Label>
                        <div className="mt-1 flex items-center">
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                placeholder="Enter your current password"
                                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
                            />
                            <Button
                                variant="ghost"
                                size="icon"
                                className="ml-3 h-10 w-10 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-gray-600 dark:hover:text-gray-400"
                            >
                                <EyeIcon className="h-5 w-5" />
                                <span className="sr-only">Toggle password visibility</span>
                            </Button>
                        </div>
                    </div>
                    <div>
                        <Label htmlFor="new-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            New Password
                        </Label>
                        <div className="mt-1 flex items-center">
                            <Input
                                id="new-password"
                                name="new-password"
                                type="password"
                                autoComplete="new-password"
                                required
                                placeholder="Enter your new password"
                                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
                            />
                            <Button
                                variant="ghost"
                                size="icon"
                                className="ml-3 h-10 w-10 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-gray-600 dark:hover:text-gray-400"
                            >
                                <EyeIcon className="h-5 w-5" />
                                <span className="sr-only">Toggle password visibility</span>
                            </Button>
                        </div>
                    </div>
                    <div>
                        <Label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Confirm New Password
                        </Label>
                        <div className="mt-1 flex items-center">
                            <Input
                                id="confirm-password"
                                name="confirm-password"
                                type="password"
                                autoComplete="new-password"
                                required
                                placeholder="Confirm your new password"
                                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
                            />
                            <Button
                                variant="ghost"
                                size="icon"
                                className="ml-3 h-10 w-10 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-gray-600 dark:hover:text-gray-400"
                            >
                                <EyeIcon className="h-5 w-5" />
                                <span className="sr-only">Toggle password visibility</span>
                            </Button>
                        </div>
                    </div>
                    <div className="flex justify-end gap-2">
                        <Button variant="outline">Cancel</Button>
                        <Button type="submit">Save Changes</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

function EyeIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    )
}