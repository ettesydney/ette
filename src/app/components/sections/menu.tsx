import { client } from '@/sanity/lib/client';
import { MENU_QUERY } from '@/sanity/lib/queries';

export default async function Menu() {
  const menuData = await client.fetch(MENU_QUERY);

  if (!menuData) {
    return <p className="text-center text-red-500">No menu data found.</p>;
  }

  return (
    <div className="text-center min-h-screen bg-primarylights flex flex-col items-center justify-center gap-4">
      {/* Menu Title */}
      <h2 className="text-3xl font-bold mb-4">{menuData.title}</h2>

      {/* Menu Blurb */}
      <div className='max-w-2xl'>
        <p className="text-lg text-gray-700 mb-6">{menuData.menuBlurb}</p>
      </div>

      {/* Menu Sections */}
      {menuData.sections?.map((section: any, index: number) => (
        <div key={index} className="mb-6">
          {/* Section Title */}
          <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
          
          {/* Menu Items */}
          <ul className="text-lg text-gray-600">
            {section.items?.map((item: string, itemIndex: number) => (
              <li key={itemIndex} className="mb-1">{item}</li>
            ))}
          </ul>
        </div>
      ))}

      {/* Drinks Menu PDF Link */}
      {menuData.drinksMenu?.asset?.url && (
        <div className="mt-6 button">
          <a 
            href={menuData.drinksMenu.asset.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            View Drinks Menu
          </a>
        </div>
      )}
    </div>

  );
}
