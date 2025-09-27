import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Shield, Users, Zap, Wallet, TrendingUp, Lock } from "lucide-react"
import { CheatFundFeatureStack } from "@/components/sticky-cards"
import { Footer } from "@/components/footer"
import { TubelightNavbar } from "@/components/tubelight-navbar"
import { EnhancedHero } from "@/components/enhanced-hero"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <TubelightNavbar />

      {/* Hero Section */}
      <EnhancedHero />

      {/* Sticky Card Animation Section */}
      <section className="relative min-h-screen">
        <CheatFundFeatureStack />
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-balance mb-4">Built for the Future of Finance</h2>
            <p className="text-muted-foreground text-balance max-w-2xl mx-auto">
              Experience chit funds reimagined with blockchain technology, smart contracts, and decentralized
              governance.
            </p>
          </div>

          <div className="flex justify-center mb-16">
            <div className="relative w-full max-w-md">
              <img
                src="/images/blockchain-ecosystem.png"
                alt="Blockchain ecosystem with Ethereum and decentralized components"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Smart Contract Security</h3>
                <p className="text-muted-foreground leading-relaxed">
                  All funds are secured by audited Ethereum smart contracts. No intermediaries, complete transparency,
                  and automated execution.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Community Governance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Participate in decentralized decision-making. Vote on fund parameters, dispute resolution, and
                  community proposals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Instant Settlements</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Automated bidding, instant payouts, and real-time fund management. Experience the speed of
                  decentralized finance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-balance mb-4">Simple. Transparent. Decentralized.</h2>
            <p className="text-muted-foreground text-balance max-w-2xl mx-auto">
              Join or create chit funds in three simple steps. No paperwork, no middlemen, just pure Web3 innovation.
            </p>
          </div>

          <div className="flex justify-center mb-16">
            <div className="relative w-full max-w-lg">
              <img
                src="/images/contribute-earn-network.png"
                alt="Decentralized network showing contribute and earn workflow"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Wallet className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Connect Your Wallet</h3>
              <p className="text-muted-foreground leading-relaxed">
                Connect your Ethereum wallet to get started. Support for MetaMask, WalletConnect, and other popular
                wallets.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Join or Create Funds</h3>
              <p className="text-muted-foreground leading-relaxed">
                Browse existing chit funds or create your own. Set parameters, invite participants, and launch your
                fund.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Participate & Earn</h3>
              <p className="text-muted-foreground leading-relaxed">
                Place bids, make deposits, and receive payouts automatically. Track your investments in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-8">
                  <Lock className="h-10 w-10 text-primary" />
                </div>

                <h2 className="text-3xl font-bold text-balance mb-6">Finance without the middleman.</h2>

                <p className="text-xl text-muted-foreground text-balance mb-8 leading-relaxed">
                  Experience true decentralized finance. Our smart contracts eliminate intermediaries while ensuring
                  complete security and transparency for all participants.
                </p>

                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Read Security Audit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="order-1 lg:order-2">
                <img
                  src="/images/defi-piggy-bank.png"
                  alt="DeFi piggy bank with hands contributing to decentralized finance"
                  className="w-full h-auto max-w-md mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">$50M+</div>
              <div className="text-muted-foreground">Total Value Locked</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Chit Funds Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-balance mb-4">Ready to revolutionize your finances?</h2>
          <p className="text-xl text-primary-foreground/80 text-balance mb-8 max-w-2xl mx-auto">
            Join thousands of users already participating in the future of community finance.
          </p>
          <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
            Get Started Today
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
