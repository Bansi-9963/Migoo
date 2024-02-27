import { React, useEffect, useState } from 'react'
import Headingtext from '../Component/Headingtext'

import FeaturcardScroll from '../Component/FeaturcardScroll'

import Aftermarketcard from '../Component/Aftermarketcard'
import Cardscroll from '../Component/Cardscroll'
import BrandCarousel from '../Component/BrandCarousel'
import '../CSS/Home.css'

function Home () {
  const ProductApi = 'http://192.168.2.134:8000/api/product-category/'
  const BrandApi = 'http://192.168.2.134:8000/api/equipment-brand/'
  const EquipCtApi = 'http://192.168.2.134:8000/api/equipment-category/'
  const YrApi = 'http://192.168.2.134:8000/api/equipment-year/'
  const EquipApi = 'http://192.168.2.134:8000/api/equipment/'
  const ModelApi = 'http://192.168.2.134:8000/api/equipment-model/'
  const ProValApi = 'http://192.168.2.134:8000/api/product-attribute-value/'

  const [ProductCategoryData, setProductCategoryData] = useState([])

  const [EquipmentBrandData, setEquipmentBrand] = useState([])
  const [EquipmentCategoryData, setEquipmentCategoryData] = useState([])
  const [YearData, setYear] = useState([])
  const [EqupmentData, setEqupment] = useState([])
  const [EquipmentModelData, setEquipmentModel] = useState([])
  const [ProductCategorydata, setProductCategory] = useState([])
  const [ProductAttvaluedata, setProductAttvalue] = useState([])
  const [CatPopup, setCatPopup] = useState(false)
  const [CatValue, setCatVale] = useState('')
  const [SubCatPopup, setSubCatPopup] = useState(false)

  const [BrandSelect, setBrandValue] = useState('Select Brand')
  const [EquipmentSelect, setEquipmentValue] = useState('Select Equipment')
  const [YearSelect, setYearValue] = useState('Select Year')
  const [ModelSelect, setModelValue] = useState('Select Model')
  const [CategorySelect, setCategoryValue] = useState('')

  const TestApi = async (url, hook) => {
    try {
      const res = await fetch(url)
      const data = await res.json()
      // console.log(data)
      hook(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    TestApi(ProductApi, setProductCategoryData)

    TestApi(BrandApi, setEquipmentBrand)
    TestApi(EquipCtApi, setEquipmentCategoryData)
    TestApi(YrApi, setYear)
    TestApi(EquipApi, setEqupment)
    TestApi(ModelApi, setEquipmentModel)
    TestApi(ProductApi, setProductCategory)
    TestApi(ProValApi, setProductAttvalue)
  }, [])

  const EquipFilterArray = EquipmentModelData.filter(
    item => item.brand === BrandSelect
  )
  const EquipFilter = Array.from(
    new Map(EquipFilterArray.map(item => [item.equipment, item])).values()
  )
  const EquipFilterModel = EquipmentModelData.filter(
    item =>
      item.brand === BrandSelect &&
      item.equipment === EquipmentSelect &&
      item.year === YearSelect
  )
  const backgroundStyle = {
    backgroundImage: 'url("../Images/buy equipment category background.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '', // Adjust the height based on your needs
    width: ''
  }

  return (
    <>
      <section className='overflow-hidden' style={backgroundStyle}>
        <div className='container-1 '>
          <div className='lg:pb-[194px] pb-[120px] pt-[125px]'>
            <section id='select' className=' text-[#FFFFFF]'>
              <div className='c'>
                <h2 className='1 text-[32px] font-bold'>
                  Search by <span className='text-[#E6992A]'> Equipment</span>
                </h2>
                <div className=' pt-[26px]'>
                  <select
                    name='brand'
                    id='brand'
                    className='p-2 bg-[#D9D9D96E] rounded-md  text-left inline-flex 2xl:w-[257px] xl:w-[214px] lg:w-[48%] h-full w-full flex-col 2xl:mr-[18px] 2xl-mb-0 xl:mr-[25px] lg:mr-[10px] xl-mb-0 mb-3 font-bold text-base'
                    value={BrandSelect}
                    onChange={e => {
                      setBrandValue(e.target.value)
                    }}
                  >
                    <option
                      className='bg-[#ffffff] text-black'
                      value='Select Brand'
                    >
                      Select Brand
                    </option>
                    {EquipmentBrandData.map((element, index) => (
                      <option
                        className='bg-[#ffffff] text-black'
                        key={index}
                        value={element.name}
                      >
                        {element.name}
                      </option>
                    ))}
                  </select>

                  <select
                    name='equipment'
                    id='equipment'
                    className='p-2 bg-[#D9D9D96E] rounded-md text-left inline-flex 2xl:w-[257px] xl:w-[214px] lg:w-[48%] h-full w-full flex-col 2xl:mr-[18px] xl:mr-[25px] lg:mr-[10px] 2xl-mb-0 xl-mb-0 mb-3 font-bold text-base'
                    value={EquipmentSelect}
                    onChange={e => {
                      setEquipmentValue(e.target.value)
                    }}
                    disabled={BrandSelect === 'Select Brand'}
                  >
                    <option
                      className='bg-[#ffffff] text-black'
                      value='Select Equipment'
                    >
                      Select Equipment
                    </option>
                    <option
                      disabled
                      className='text-blue-500 text-sm bg-[#ffffff]'
                    >
                      {BrandSelect}
                    </option>
                    {EquipFilter.map((element, index) => (
                      <option
                        className='bg-[#ffffff] text-black'
                        key={index}
                        value={element.equipment}
                      >
                        {element.equipment}
                      </option>
                    ))}
                  </select>

                  <select
                    name='year'
                    id='year'
                    className='p-2 bg-[#D9D9D96E] rounded-md  text-left inline-flex 2xl:w-[257px] xl:w-[214px] lg:w-[48%] h-full w-full flex-col 2xl:mr-[18px] xl:mr-[25px] lg:mr-[10px] 2xl-mb-0 xl-mb-0 mb-3 font-bold text-base'
                    value={YearSelect}
                    onChange={e => {
                      setYearValue(e.target.value)
                    }}
                    disabled={
                      BrandSelect === 'Select Brand' ||
                      EquipmentSelect === 'Select Equipment'
                    }
                  >
                    <option
                      value='Select Year'
                      className='bg-[#ffffff] text-black'
                    >
                      Select Year
                    </option>
                    {YearData.map((element, index) => (
                      <option
                        className='bg-[#ffffff] text-black'
                        key={index}
                        value={element.year}
                      >
                        {element.year}
                      </option>
                    ))}
                  </select>

                  <select
                    name='model'
                    id='model'
                    className='p-2 bg-[#D9D9D96E] rounded-md text-left inline-flex 2xl:w-[257px] xl:w-[214px] lg:w-[48%] h-full w-full flex-col 2xl:mr-[18px] xl:mr-[25px] lg:mr-[10px] 2xl-mb-0 xl-mb-0 mb-3 font-bold text-base'
                    value={ModelSelect}
                    onChange={e => {
                      setModelValue(e.target.value)
                    }}
                    disabled={
                      BrandSelect === 'Select Brand' ||
                      EquipmentSelect === 'Select Equipment' ||
                      YearSelect === 'Select Year'
                    }
                  >
                    <option
                      value='Select Model'
                      className='bg-[#ffffff] text-black'
                    >
                      Select Model
                    </option>
                    <option
                      disabled
                      className='text-blue-500 text-sm bg-[#ffffff]'
                    >
                      {EquipmentSelect}
                    </option>
                    {EquipFilterModel.map((element, index) => (
                      <option
                        className='bg-[#ffffff] text-black'
                        key={index}
                        value={element.name}
                      >
                        {element.name}
                      </option>
                    ))}
                  </select>

                  <button
                    className='inline-flex  xl:ml-0 lg:ml-[181px] md:ml-0 sm:ml-0 ml-0 2xl:w-[180px] xl:w-[181px] lg:w-[48%] w-full items-center justify-center p-2 border border-transparent hover:bg-[#F2C94C] hover:bg-opacity-60 bg-[#E6992A] bg-opacity-60 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 align-start font-bold text-base '
                    disabled={ModelSelect === 'Select Model'}
                    onClick={e => {
                      setCatPopup(true)
                    }}
                  >
                    Search Parts
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className='pt-[28px]'>
        <div className='container-1 '>
          <Headingtext
            mainText=' Featured'
            coloredText=' Part'
            maincolor='text-black'
          />
          <FeaturcardScroll />
        </div>
      </section>

      <section className=' pt-[49px] '>
        <div className='container-1 '>
          <Headingtext
            mainText=' Search by'
            coloredText=' Category'
            maincolor='text-black'
          />

          <Cardscroll />
        </div>
      </section>

      <section className=''>
        <div className='container-1 mx-auto mt-8'>
          <div className=''>
            <Headingtext
              mainText=' Why Choose '
              coloredText='Aftermarket Parts?'
              maincolor='text-black'
            />
          </div>
          <div className='grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 3xl:gap-[7px] 2xl:gap-[7px] xl:gap-[20px] md:gap-[20px] items-center ssm:pt-[1px] md:pt-[14px] custom-scrollbar'>
            <Aftermarketcard
              imageUrl='../Images/Group (1).svg'
              heading='Authentic Product'
              text="Reliable components sourced only from reputable aftermarket 
manufacturers, ensuring quality and performance for your vehicle's longevity and your satisfaction."
            />
            <Aftermarketcard
              imageUrl='../Images/Group (1).svg'
              heading='Authentic Product'
              text="Reliable components sourced only from reputable aftermarket 
manufacturers, ensuring quality and performance for your vehicle's longevity and your satisfaction."
            />
            <Aftermarketcard
              imageUrl='../Images/Group (1).svg'
              heading='Authentic Product'
              text="Reliable components sourced only from reputable aftermarket 
manufacturers, ensuring quality and performance for your vehicle's longevity and your satisfaction."
            />
            <Aftermarketcard
              imageUrl='../Images/Group (1).svg'
              heading='Authentic Product'
              text="Reliable components sourced only from reputable aftermarket 
manufacturers, ensuring quality and performance for your vehicle's longevity and your satisfaction."
            />
          </div>
        </div>
      </section>

      {/*---Section-5 Brands Name Start----*/}
      <section className='mt-[49px] mb-5'>
        <div className='container-1'>
          <Headingtext
            mainText=' Brands we '
            coloredText='Trust'
            maincolor='text-black'
          />
          <BrandCarousel />
        </div>
      </section>

      {/*---Section-5 Brands Name End----*/}
    </>
  )
}

export default Home
