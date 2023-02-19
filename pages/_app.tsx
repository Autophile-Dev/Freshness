import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Fragment, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Breadcrumb from '../components/BreadCrumbs/Breadcrumb';
import BreadcrumbItem from '../components/BreadCrumbs/BreadcrumbItem';
import HeaderDefault from '../components/Headers/HeaderDefault';
import Menus from '../components/Menus';
function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs]:any = useState();
  useEffect(()=>{
    const pathWithoutQuery = router.asPath.split("?")[0];
    let pathArray = pathWithoutQuery.split("/");
    pathArray.shift();
    pathArray = pathArray.filter((path)=>path!=="");
    const breadcrumbs = pathArray.map((path, index) =>{
      const href = "/" + pathArray.slice(0, index + 1).join("/");
      return{
        href, label: path.charAt(0).toUpperCase() + path.slice(1),
        isCurrent: index === pathArray.length - 1,
      };
    });
    setBreadcrumbs(breadcrumbs);
  }, [router.asPath]);
  return (
    <div className='flex flex-col'>
      {/* Header */}
      <HeaderDefault/>
      {/* Menu */}
      <Menus variant='White'/>
      <section className='w-full'>
        <div className='container mx-auto'>
          <div className='px-[80px]'>
            <Breadcrumb>
              <BreadcrumbItem isCurrent = {router.pathname === "/"} href = "/">
                Home
              </BreadcrumbItem>
              {breadcrumbs && breadcrumbs.map((breadcrumb: { href: any; isCurrent: any; label: any; })=>(
              <BreadcrumbItem
                key = {breadcrumb.href}
                href={breadcrumb.href}
                isCurrent = {breadcrumb.isCurrent}
              >{breadcrumb.label}</BreadcrumbItem>))}
            </Breadcrumb>
          </div>
        </div>
      </section>
      <Component {...pageProps} />
    </div>
  )
}
export default App
