"use client"
import { SectionTitle } from "@/Components/SectionTitle"
import { useIntersection } from "@/hooks/useIntersection";

export const AboutCompany = ({ }) => {
    const {isIntersecting, refElement} = useIntersection({threshold:0.15, disposable:true});
    
    return (
        <section id="about" ref={refElement} className={`flex items-center space-y-10 px-10 flex-col sm:flex-row sm:space-x-10 ${isIntersecting?"transition-all duration-1000":"translate-y-32 opacity-0"}`}>
            <div className="flex flex-1 flex-col space-y-4 items-center text-center">
                <SectionTitle weight="bold" title="ABOUT COMPANY" />
                <p className="">We are a company that responds to the development of the global logistics industry based on technology and efficiency, emphasising the best quality service to customers and partners. Our business focuses on warehousing, transport and distribution, supported by modern technology and experienced professionals</p>
            </div>
            <div className="flex-1">
                <img className="w-full" src="/img/common/image-1.webp" alt="" />
            </div>
        </section>
    )
}