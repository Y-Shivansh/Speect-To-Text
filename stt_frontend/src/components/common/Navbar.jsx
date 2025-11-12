import { VakyaLogoComponent } from "@/components/design/VakyaLogo";
import { APP } from "@/utils/contants";

export function NavBar(){

  return (
      <nav className="container mx-auto flex items-center justify-between px-1 py-1">
        <a href="/" className="flex items-center gap-2">
          <span className="inline-block h-8 w-8">
            <VakyaLogoComponent className="rounded-md" />
          </span>
          <span className="font-semibold text-2xl bg-linear-to-r from-blue-500 via-blue-700 to-indigo-900 bg-clip-text text-transparent tracking-widest">{APP.eng_name}</span>
        </a>
      </nav>
  );
}
