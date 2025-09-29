export function AboutSection() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="mb-8 text-[#733635]">
          Welcome to CSIET
        </h1>
        <h2 className="mb-6 text-[#733635]">
          Carolina Sales Institute of Engineering and Technology
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            CSIET is the University of South Carolina's premier organization dedicated to bridging the gap between 
            engineering excellence and sales mastery. We empower students with the technical expertise and 
            communication skills needed to excel in technical sales roles.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            Our mission is to develop well-rounded professionals who can translate complex engineering concepts 
            into compelling business solutions. Through hands-on workshops, industry partnerships, and networking 
            opportunities, we prepare our members for successful careers in sales engineering.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#ebe3d5] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-[#733635]">🎯</span>
              </div>
              <h3 className="mb-2 text-[#733635]">Technical Excellence</h3>
              <p className="text-gray-600">Deep understanding of engineering principles and technical solutions</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#ebe3d5] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-[#733635]">💼</span>
              </div>
              <h3 className="mb-2 text-[#733635]">Sales Mastery</h3>
              <p className="text-gray-600">Professional sales techniques and relationship-building skills</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#ebe3d5] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-[#733635]">🤝</span>
              </div>
              <h3 className="mb-2 text-[#733635]">Industry Connections</h3>
              <p className="text-gray-600">Direct access to leading companies and industry professionals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
