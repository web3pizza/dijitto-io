export default function Team() {
  const teamMembers = [
    {
      name: 'Aaron McCann',
      bio: 'A prominent figure in the culinary scene, Aaron McCann brings his success in commercial real estate finance and the quick-service restaurant industry to the table. As the owner of five highly regarded pizzerias in Brooklyn and Manhattan, Aaron has proven his versatility. His forward-thinking mindset and adaptability to emerging technologies are evident through his involvement in the blockchain community since 2017.',
    },
    {
      name: 'Jose Rivera',
      bio: 'Known for his hands-on approach and mentorship skills, Jose Rivera is a respected figure in building systems and teams within rapidly growing technology startups. He has held influential positions such as VP of Engineering at NYSHEX and Head of Engineering for the Procore for Owners business unit at Procore. With a BSc in Electrical Engineering and Computer Science from MIT, Jose is well-equipped to drive innovation and navigate periods of rapid change.',
    },
    {
      name: 'Jon Tvrdik',
      bio: 'Jon Tvrdik is an entrepreneur and consultant with a passion for design, strategy, and experience consulting in the financial technology sector. As a co-founder of WaveCX, a digital engagement platform tailored for financial institutions, Jon has played a pivotal role in shaping the industry\'s trajectory. With his expertise in crafting immersive brand experiences through digital advertising, Jon knows how to captivate audiences and make a lasting impression. Beyond the digital realm, Jon also owns cocktail and beer bars, showcasing his entrepreneurial spirit.',
    },
  ];

  return (
    <section id="team" className="py-20 md:py-24 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-4">
            Meet the Team
          </h2>
          <p className="text-lg text-[#374151] max-w-3xl mx-auto">
            Industry leaders with proven track records in technology and business
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              {/* Avatar Placeholder */}
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-[#1E3A8A] to-[#169EDD] rounded-full flex items-center justify-center">
                  <span className="text-white text-5xl font-bold">
                    {member.name.charAt(0)}
                  </span>
                </div>
              </div>

              {/* Member Info */}
              <h3 className="text-2xl font-bold text-[#1E3A8A] mb-4 text-center">
                {member.name}
              </h3>
              <p className="text-[#374151] leading-relaxed text-sm md:text-base">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
