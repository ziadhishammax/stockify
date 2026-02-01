import { FloatingAdBanner } from "@/components/FloatingAdBanner";
import Header from "@/components/Header";
import {auth} from "@/lib/better-auth/auth";
import {headers} from "next/headers";
import {redirect} from "next/navigation";

const Layout = async ({ children }: { children : React.ReactNode }) => {
    const session = await auth.api.getSession({ headers: await headers() });

    // if(session?.user) redirect('/sign-in');

    const user = {
        id: session?.user.id || 1256,
        name: session?.user.name || 'john doe',
        email: session?.user.email || 'johndoe@mail.com',
    }

    return (
        <main className="min-h-screen text-gray-400">
            <Header user={user} />
            {/* <FloatingAdBanner /> */}
            <div className="container py-10">
                {children}
            </div>
        </main>
    )
}
export default Layout
