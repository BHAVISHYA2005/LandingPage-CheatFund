"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import ReactLenis from "lenis/react"
import { useRef } from "react"
import { Shield, Users, Zap, TrendingUp, Lock } from "lucide-react"

const chitFundFeatures = [
  {
    title: "Smart Contract Security",
    description:
      "All funds secured by audited Ethereum smart contracts with complete transparency and automated execution",
    icon: Shield,
    src: "/blockchain-security-smart-contracts-ethereum.jpg",
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Community Governance",
    description: "Decentralized decision-making with voting on fund parameters, proposals, and dispute resolution",
    icon: Users,
    src: "/community-governance-voting-blockchain.jpg",
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Instant Settlements",
    description:
      "Lightning-fast automated bidding, instant payouts, and real-time fund management powered by blockchain",
    icon: Zap,
    src: "/instant-payments-lightning-fast-transactions.jpg",
    color: "from-purple-500 to-pink-600",
  },
  {
    title: "Investment Growth",
    description: "Track your investments, participate in profitable chit fund cycles, and maximize your returns",
    icon: TrendingUp,
    src: "/investment-growth-financial-charts-trending-up.jpg",
    color: "from-orange-500 to-red-600",
  },
  {
    title: "Decentralized Finance",
    description: "Experience true DeFi without intermediaries, traditional banking limits, or centralized control",
    icon: Lock,
    src: "/decentralized-finance-defi-blockchain.jpg",
    color: "from-green-500 to-emerald-600",
  },
]

const CheatFundFeatureCard = ({
  i,
  title,
  description,
  icon: Icon,
  src,
  color,
  progress,
  range,
  targetScale,
}: {
  i: number
  title: string
  description: string
  icon: any
  src: string
  color: string
  progress: any
  range: [number, number]
  targetScale: number
}) => {
  const container = useRef<HTMLDivElement>(null)
  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div ref={container} className="sticky top-0 flex items-center justify-center">
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 20 + 250}px)`,
        }}
        className="rounded-3xl relative -top-1/4 flex h-[400px] w-[700px] max-w-[90vw] origin-top flex-col overflow-hidden bg-card border border-border/50 shadow-2xl"
      >
        <div className="relative h-full w-full">
          <img
            src={src || "/placeholder.svg"}
            alt={title}
            className="h-full w-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = `/placeholder.svg?height=400&width=700&text=${encodeURIComponent(title)}`
            }}
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-30`} />

          {/* Content overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white text-balance">{title}</h3>
            </div>
            <p className="text-white/90 text-lg leading-relaxed max-w-lg text-pretty">{description}</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

const CheatFundFeatureStack = () => {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  })

  return (
    <ReactLenis root>
      <main
        ref={container}
        className="relative flex w-full flex-col items-center justify-center pb-[100vh] pt-[50vh] bg-background"
      >
        <div className="absolute left-1/2 top-[8%] grid -translate-x-1/2 content-start justify-items-center gap-6 text-center z-10 px-4">
          <div className="max-w-3xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Experience the Future of
              <span className="text-primary"> Chit Funds</span>
            </h2>
            <p className="text-muted-foreground text-lg lg:text-xl mb-8 text-balance leading-relaxed">
              Discover how blockchain technology transforms traditional chit funds into secure, transparent, and
              efficient financial instruments for the Web3 era.
            </p>
          </div>
          <span className="after:from-muted-foreground after:to-transparent relative max-w-[16ch] text-xs uppercase leading-tight opacity-60 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:content-[''] font-medium tracking-wider">
            scroll down to explore features
          </span>
        </div>

        {chitFundFeatures.map((feature, i) => {
          const targetScale = Math.max(0.5, 1 - (chitFundFeatures.length - i - 1) * 0.1)
          return (
            <CheatFundFeatureCard
              key={`feature_${i}`}
              i={i}
              {...feature}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          )
        })}
      </main>
    </ReactLenis>
  )
}

export { CheatFundFeatureStack, CheatFundFeatureCard }
