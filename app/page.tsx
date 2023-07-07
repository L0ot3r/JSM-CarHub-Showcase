import Image from 'next/image'

import { Hero, Catalogue } from '@/components'
import { getCars } from '@/utils'
import { ICar, IFilterProps } from '@/types'

export default async function Home({ searchParams }) {

  const allCars: ICar[] = await getCars({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
    model: searchParams.model || '',
  })
  
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <Catalogue data={allCars} />
      </div>
    </main>
  )
}
