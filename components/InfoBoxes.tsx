import Link from "next/link";

const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1  p-4 rounded-lg">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">For Renters</h2>
            <p className="mt-2 mb-4">
              Find your dream rental property. Bookmark properties and contact
              owners.
            </p>
            <Link
              href="/properties"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700 duration-200"
            >
              Browse Properties
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
