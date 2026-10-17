import { MaxWidthWrapper } from "./MaxWidthWrapper";

export function Hero (){
    return (
        <div>
            <MaxWidthWrapper>
                <div className="h-96 w-full flex flex-col gap-3 items-center justify-center bg-neutral-100 rounded">
                    <h3 className="font-medium text-5xl">Store of your dreams</h3>
                    <h5 className=" text-2xl">I sell drugs here!</h5>
                </div>

            </MaxWidthWrapper>
        </div>
    )

}