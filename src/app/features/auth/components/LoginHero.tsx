import Image from "next/image";

export default function LoginHero() {
    return (
        <div className="mobile-page w-full bg-[#856DF3] text-white flex flex-col justify-between p-8 md:p-12 lg:p-16 md:min-h-screen relative overflow-hidden select-none">
            {/* Background Decorative Glow (for premium aesthetic) */}
            <div
                className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] rounded-full bg-white/10 blur-[120px] pointer-events-none"
                aria-hidden="true"
            />
            <div
                className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-black/10 blur-[100px] pointer-events-none"
                aria-hidden="true"
            />

            {/* Top Section: Logo */}
            <div className="flex items-center gap-2.5 z-10 self-center justify-center w-full">
                <div className="relative w-8 h-8 flex items-center justify-center">
                    <Image
                        src="/icons/image copy.png"
                        alt="ShipNow Black Logo Icon"
                        fill
                        sizes="32px"
                        className="object-contain"
                        priority
                    />
                </div>
                <span className="font-heading font-extrabold italic text-2xl tracking-wider text-white">
                    SHIPNOW
                </span>
            </div>

            {/* Middle Section: Overlapping Illustrations */}
            <div className="flex-1 flex items-center justify-center my-10 md:my-0 z-10 relative">
                <div className="relative w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[460px] aspect-[1.15/1]">
                    {/* Main Truck Box Image */}
                    <div className="absolute left-0 bottom-0 w-[80%] aspect-[820/772] rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-white/5">
                        <Image
                            src="/images/loginpage/image.png"
                            alt="ShipNow logistics vehicle loaded with boxes"
                            fill
                            sizes="(max-width: 768px) 270px, 350px"
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Overlay Girl with Phone Image */}
                    <div className="absolute right-0 top-0 w-[45%] aspect-[453/552] rounded-2xl overflow-hidden">
                        <Image
                            src="/images/loginpage/image copy.png"
                            alt="Person managing logistics on mobile phone"
                            fill
                            sizes="(max-width: 768px) 150px, 200px"
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Bottom Section: Welcome Messaging */}
            <div className="text-center z-10 max-w-md mx-auto">
                <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-3 tracking-tight">
                    Welcome to ShipNow
                </h1>
                <p className="font-sans text-sm md:text-base text-white/90 leading-relaxed font-light">
                    Manage your shipments, fleet, and warehouse in one smart dashboard.
                </p>
            </div>
        </div>
    );
}
