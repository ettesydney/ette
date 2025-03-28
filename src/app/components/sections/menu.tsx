import { client } from '../../../../sanity/lib/client';
import { MENU_QUERY, GENERIC_QUERY} from '../../../../sanity/lib/queries';

export default async function Menu() {
  const menuData = await client.fetch(MENU_QUERY);
  const siteData = await client.fetch(GENERIC_QUERY)
  

  if (!menuData) {
    return <p className="text-center text-red-500">No menu data found.</p>;
  }

  return (
    <div className="text-center bg-primarylights flex flex-col items-center justify-center gap-4 mt-[4rem] mx-[2rem] " >

      <h2 className='title'>Menu</h2>

      <div className='max-w-2xl'>
        <p className="mb-6">{menuData.menuBlurb}</p>
      </div>
      
      {/* Menu Title */}
      <div className='lg:mb-[1rem]'>
        {menuData.title.map((item: { title: string; blurb: string }, index: number) => (
          <div key={index} className="mb-4 max-w-2xl">
            <h3 className={index !== 0 ? 'mt-6 title' : 'title'}>{item.title}</h3>
            <p className="blurb">{item.blurb}</p>
          </div>
        ))}
      </div>

      {/* Menu Sections */}
      {menuData.sections?.map((section: any, index: number) => (
        <div key={index} className="mb-6 max-w-2xl">
          {/* Section Title */}
          <h3 className="mb-2">{section.title}</h3>
          
          {/* Menu Items */}
          <ul className="">
            {section.items?.map((item: string, itemIndex: number) => (
                <li key={itemIndex} className="mb-1">{item === 'blank' ? '\u00A0' : item}</li>
              
            ))}
          </ul>
        </div>
      ))}

      {/* Drinks Menu PDF Link */}
      {menuData.drinksMenu?.asset?.url && (
        <div className="mt-1 max-w-2xl">
          <a 
            href={menuData.drinksMenu.asset.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="button px-4 py-2  w-[200px] block"
          >
            Drinks Menu
          </a>
        </div>
      )}
      
      {siteData.bookNowLink && (
        <div className="lg:mb-0 mb-[2rem]">
          <a 
            href={siteData.bookNowLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="button dark-button px-4 py-2 w-[200px] block"
          >
            Book
          </a>
        </div>
      )}
    </div>

  );
}
