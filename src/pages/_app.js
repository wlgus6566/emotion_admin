import '@/styles/globals.css'
import AppSidebar from "@/components/app-sidebar";
export default function App({ Component, pageProps }) {
  return (
      <div className="flex h-screen">
        <AppSidebar/>
          <div className="p-16 flex-1">
              <Component {...pageProps} />
          </div>
      </div>
  )
}
