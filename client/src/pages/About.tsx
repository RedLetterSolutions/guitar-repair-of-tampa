import SEOHead from "@/components/common/SEOHead";
import BioCard from "@/components/common/BioCard";
import { siteConfig } from "@shared/config";
import { Star, CheckCircle, Heart } from "lucide-react";

export default function About() {
  return (
    <>
      <SEOHead
        title="About Us - Master Luthiers & Guitar Repair Experts"
        description="Meet Michael Donner and Ben Chafin, master luthiers with 30+ years combined experience from major guitar manufacturers. Learn about our mission and values."
      />

      <div className="section-padding bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">About Us</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the master craftsmen behind Guitar Repair of Tampa Bay. With decades of industry experience 
              and a passion for excellence, we bring unmatched expertise to every repair and custom build.
            </p>
          </div>

          {/* Bio Cards */}
          <div className="space-y-12 mb-20">
            {siteConfig.team.map((member, index) => (
              <BioCard
                key={member.name}
                name={member.name}
                title={member.title}
                bio={member.bio}
                expertise={member.expertise}
                imagePosition={index % 2 === 0 ? "left" : "right"}
                backgroundColor={index % 2 === 0 ? "bg-muted/50" : "bg-amber-50"}
              />
            ))}
          </div>

          {/* Mission Statement & Values */}
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission & Values</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We believe every guitar deserves expert care and attention. Whether it's a vintage instrument needing restoration 
                or a modern guitar requiring a simple setup, we bring decades of combined experience and a genuine passion for 
                the craft to every job.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for perfection in every repair and custom build, using only the finest materials and proven techniques.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Integrity</h3>
                <p className="text-muted-foreground">
                  Transparent pricing, honest assessments, and ethical business practices guide every interaction with our customers.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Passion</h3>
                <p className="text-muted-foreground">
                  Our love for guitars and music drives us to exceed expectations and create instruments that inspire musicians.
                </p>
              </div>
            </div>

            {/* Extended Mission */}
            <div className="bg-muted/50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4 text-center">Our Commitment to You</h3>
              <p className="text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
                Our commitment to {siteConfig.ethos.toLowerCase()} means we treat every instrument as if it were our own. 
                From the moment you bring your guitar to us, you can expect honest communication, expert craftsmanship, 
                and a dedication to bringing out the best in your instrument. We understand that your guitar is more than 
                just wood and strings – it's your voice, your creativity, and your passion. That's why we take the time 
                to understand your needs and deliver results that exceed your expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
