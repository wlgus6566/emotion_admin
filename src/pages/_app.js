import '@/styles/globals.css'
import AppSidebar from "@/components/app-sidebar";
export default function App({ Component, pageProps }) {
  return (
      <div className="flex h-screen">
        <AppSidebar/>
        <Component {...pageProps} />
      </div>
  )
}
