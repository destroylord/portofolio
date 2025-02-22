import Image from "next/image";
import { motion } from "framer-motion";
import Swift from "programming-languages-logos/src/swift/swift.svg";
import Php from "programming-languages-logos/src/php/php.svg";
import C from "programming-languages-logos/src/c/c.svg";
import Csharp from "programming-languages-logos/src/csharp/csharp.svg";
import Javascript from "programming-languages-logos/src/javascript/javascript.svg";
import Typescript from "programming-languages-logos/src/typescript/typescript.svg";
import Python from "programming-languages-logos/src/python/python.svg";
import Go from "programming-languages-logos/src/go/go.svg";
import Kotlin from "programming-languages-logos/src/kotlin/kotlin.svg";
import Ruby from "programming-languages-logos/src/ruby/ruby.svg";
import Java from "programming-languages-logos/src/java/java.svg";
export default function InfiniteLogo() {
    const LogoGroup = () => (
        <div className="flex space-x-16 min-w-max ">
            <Image src={Swift} alt="Swift logo" width={42} height={42} />
            <Image src={Php} alt="PHP logo" width={42} height={42} />
            <Image src={C} alt="C logo" width={42} height={42} />
            <Image src={Csharp} alt="C# logo" width={42} height={42} />
            <Image
                src={Javascript}
                alt="Javascript logo"
                width={42}
                height={42}
            />
            <Image
                src={Typescript}
                alt="Typescript logo"
                width={42}
                height={42}
            />
            <Image src={Python} alt="Python logo" width={42} height={42} />
            <Image src={Go} alt="Go logo" width={42} height={42} />
            <Image src={Kotlin} alt="Kotlin logo" width={42} height={42} />
            <Image src={Ruby} alt="Ruby logo" width={42} height={42} />
            <Image src={Java} alt="Java logo" width={42} height={42} />
        </div>
    );
    return (
        <section className="flex flex-col items-center gap-8 overflow-x-hidden pt-20 sm:flex-row md:gap-16 md:py-lg md:pt-sm">
            <div className="relative overflow-hidden py-4 bg-base-200/20 mt-10">
                <motion.div
                    className="flex"
                    animate={{
                        x: [0, -1017.5], // Adjust this value based on your content width
                    }}
                    transition={{
                        x: {
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop",
                        },
                    }}>
                    <LogoGroup />
                </motion.div>
            </div>
        </section>
    );
}
