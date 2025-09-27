"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, Sparkles, TrendingUp, Shield, Users } from "lucide-react"
import { useState } from "react"

const EnhancedHero = () => {
  const [isHovered, setIsHovered] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section className="relative py-20 lg:py-32 pt-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

      {/* Animated Background Orbs */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "2s" }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto"
        >
          {/* Announcement Badge */}
          <motion.div variants={itemVariants}>
            <Badge
              variant="secondary"
              className="mb-8 bg-primary/10 text-primary border-primary/20 px-6 py-2 text-sm font-medium hover:bg-primary/20 transition-colors cursor-pointer group"
            >
              <motion.span
                className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:scale-110 transition-transform"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
              <Sparkles className="w-4 h-4 mr-2" />
              Announcing $2M in Seed Funding
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Badge>
          </motion.div>

          {/* Main Headline */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance mb-8 leading-tight">
              <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Decentralized Chit Funds
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                for Web3 Communities
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants}>
            <p className="text-xl lg:text-2xl text-muted-foreground text-balance mb-12 max-w-3xl mx-auto leading-relaxed">
              Join the future of community finance. Create, participate, and manage chit funds with complete
              transparency through <span className="text-primary font-semibold">Ethereum smart contracts</span>.
            </p>
          </motion.div>

          {/* Feature Pills */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { icon: Shield, text: "Audited Smart Contracts" },
              { icon: Users, text: "Community Governed" },
              { icon: TrendingUp, text: "Instant Settlements" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-card/50 backdrop-blur border border-border/50 rounded-full px-4 py-2 text-sm font-medium"
              >
                <feature.icon className="w-4 h-4 text-primary" />
                {feature.text}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                <Button
                  size="lg"
                  onClick={() =>
                    window.open("https://cheatfund.vercel.app/", "_blank")
                  }
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"
                    initial={{ x: "-100%" }}
                    animate={{ x: isHovered ? "100%" : "-100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10 flex items-center">
                    Launch App
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 text-lg font-semibold rounded-xl border-2 hover:bg-muted/50 transition-all duration-300 group bg-transparent"
                >
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div variants={itemVariants} className="mt-16">
            <p className="text-sm text-muted-foreground mb-6 font-medium">Trusted by leading Web3 communities</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {["Ethereum", "Polygon", "Arbitrum", "Optimism"].map((network, index) => (
                <motion.div
                  key={index}
                  whileHover={{ opacity: 1, scale: 1.1 }}
                  className="text-lg font-semibold tracking-wide cursor-pointer transition-all"
                >
                  {network}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}

export { EnhancedHero }
