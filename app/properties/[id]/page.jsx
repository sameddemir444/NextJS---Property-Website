import connectDB from "@/config/database";
import Property from "@/models/Property";
import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import PropertyDetails from "@/components/PropertyDetails";

const PropertyPage = async ({ params }) => {
  await connectDB();
  const property = await Property.findById(params.id).lean();

  return (
    <>
      <PropertyHeaderImage image={property.images[0]} />
      <section>
        <section>
          <div className="container m-auto py-6 px-6">
            <Link
              href="/properties"
              className="text-blue-600 hover:text-blue-500 flex items-center duration-200"
            >
              <FaArrowLeft className="mr-2" /> Back to Properties
            </Link>
          </div>
        </section>
      </section>
      <section class="bg-blue-50">
        <div class="container m-auto py-10 px-6">
          <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            {/* Property Info */}
            <PropertyDetails property={property} />
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertyPage;
