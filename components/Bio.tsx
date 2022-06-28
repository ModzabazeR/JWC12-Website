import Image from "next/image";

const bioMessage = `หมอหมึกเป็นนักพยากรณ์ที่ชำนาญด้านการทำนายดวงด้วย\nลูกแก้วพยากรณ์ ไพ่ทาโร และการดูลายมือ \n\nด้วยความสามารถที่หลากหลาย \nทำให้หมอหมึกสามารถเลือกวิธีการทำนายที่เหมาะกับแต่ละบุคคล 
เพื่อให้ได้ผลลัพธ์แม่นยำที่สุด`

const Bio = () => {
    return (
        <section className="flex flex-col p-8 md:flex-row-reverse justify-evenly md:items-center">
            <div className="block p-8 md:h-auto md:w-72 md:p-0">
                <Image src={"/user.png"} width={1200} height={1200} layout="responsive" />
            </div>
            <div>
                <h2 className="text-2xl mb-4">ประวัติหมอหมึก</h2>
                <p className="md:whitespace-pre-wrap">
                    {bioMessage}
                </p>
            </div>
        </section>
    )
}

export default Bio;