import { APP } from "@/utils/contants"

export function Hero() {
    return (
        <section className="container mx-auto px-4 py-20 md:py-28">
            <div className="mx-auto max-w-3xl text-center">
                <p className="text-4xl font-bold bg-linear-to-r from-blue-800 via-blue-500 to-indigo-400 bg-clip-text text-transparent tracking-widest">{`${APP.brand_name}`}</p>
                <h1 className="mt-3 text-2xl font-semibold md:text-4xl bg-linear-to-r from-blue-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent -tracking-tight">
                    {`|| ${APP.tagline} ||`}
                </h1>
                <p className="mt-4 font-medium text-primary md:text-lg ">
                    {APP.descripition}
                </p>
            </div>
        </section>
    )
}
