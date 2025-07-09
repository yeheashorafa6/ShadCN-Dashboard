import { Tajawal } from "next/font/google";
import "./globals.css";
import AppSidebar from "@/components/AppSidebar/AppSidebar";
import Navbar from "@/components/Navbar/Navbar";
import { ThemeProvider } from "@/components/Providers/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cookies } from "next/headers";

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Dashboard",
  description: "Generated Dashboard by create next app",
};

export default async function RootLayout({ children }) {
    const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"
 
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${tajawal.variable} antialiased flex `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar defaultOpen={defaultOpen}/>
            <main className="w-full">
              <Navbar />
              <div className="p-4">{children}</div>
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
