

const Faq = () => {
  return (
    <div>
      <div className="flex justify-center items-center gap-6 mt-44">
        <div className="w-full md:w-1/2 lg:w-1/2 mb-6">
          <h1 className="text-4xl font-semibold mt-10 mb-7">Welcome, Let’s Talk About Our Recyclo.</h1>
          <div className="collapse collapse-plus bg-base-200 mb-3">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              What is Recyclo?
            </div>
            <div className="collapse-content">
              <p className="text-[#666]">
                Recyclo is a revolutionary online marketplace that connects
                buyers and sellers of recyclable materials, promoting a
                sustainable and efficient waste management system.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 mb-3">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              What problem does Recyclo solve?
            </div>
            <div className="collapse-content">
              <p className="text-[#666]">
                Recyclo tackles the inefficiency and lack of transparency in the
                traditional waste management industry by creating a platform for
                easy buying and selling of recyclables.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 mb-3">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Who can benefit from Recyclo?
            </div>
            <div className="collapse-content">
              <p className="text-[#666]">
                Recyclo benefits both businesses and individuals. Businesses can
                find reliable sources of recycled materials, while individuals
                can earn money by selling their recyclables.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 mb-3">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Is Recyclo available in my area?
            </div>
            <div className="collapse-content">
              <p className="text-[#666]">
                You can check Recyclo&apos;s website or app to see if the service is
                available in your location.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 mb-3">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              How do I sign up for Recyclo?
            </div>
            <div className="collapse-content">
              <p className="text-[#666]">
                Recyclo will likely have a straightforward signup process on
                their website or app.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 mb-3">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              What are the fees associated with using Recyclo?
            </div>
            <div className="collapse-content">
              <p className="text-[#666]">
                The fee structure for Recyclo may depend on whether you are a
                buyer or seller. Be sure to check the platform&apos;s terms and
                conditions for details.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 mb-3">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              How does Recyclo ensure the quality of the recyclables?
            </div>
            <div className="collapse-content">
              <p className="text-[#666]">
                Recyclo may implement a system for sellers to disclose the
                condition of their recyclables. Additionally, buyers may be able
                to leave reviews to help build trust within the marketplace.
              </p>
            </div>
          </div>
        </div>

        {/* img */}
        <div className="w-full md:w-1/2 lg:w-1/2">
          <img className="rounded-lg" src="https://i.ibb.co/jTWpCV3/faq.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Faq;
