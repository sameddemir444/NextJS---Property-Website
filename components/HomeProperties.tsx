import Link from "next/link";
import properties from "@/properties.json";
import PropertyCard from "./PropertyCard";

const HomeProperties = () => {
  const recentProperties = properties.slice(0, 4);

  return (
    <>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto px-4 py-6">
          <h2 className="text-3xl font-bold text-blue-600 mb-6 text-start">
            Recent Properties
          </h2>
          {properties.length === 0 ? (
            <p>No properties found</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {recentProperties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="m-auto max-w-lg my-12 px-6">
        <Link
          href="/properties"
          className="block bg-black text-white py-4 px-6 rounded-xl hover:bg-gray-900 text-center font-medium duration-200"
        >
          View All Properties
        </Link>
      </section>
    </>
  );
};

export default HomeProperties;
