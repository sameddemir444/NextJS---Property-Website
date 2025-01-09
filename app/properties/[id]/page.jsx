import connectDB from "@/config/database";
import Property from "@/models/Property";
import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

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
      <section>{property.name}</section>
    </>
  );
};

export default PropertyPage;
