import Image from "next/image";

const Contact = () => {
    return (
        <section className="flex flex-col md:flex-row-reverse p-8 items-center md:justify-evenly">
            <div>
                <h2 className="text-2xl mb-2">ทำนายชะตากับหมอหมึก</h2>
                <p>สามารถจองคิวได้ตาม</p>
                <p>อีเมล: octopus_fortune@teller.com</p>
                <p>โทรศัพท์: 099 XXXX XXX</p>
                <p>และมาสำนักที่</p>
                <p>ชั้น 12 อาหาร JWC ถนนโปรแกรมมิ่ง แขวงเว็บ เขตอินเตอร์เน็ต กรุงเทพ 99999</p>
                <p>ตามวันเวลาที่นัดไว้</p>
                <br />
                <p>จำกัดที่ 10 คิวต่อหนึ่งวัน เปิดทำการ 10.00 - 18.30 น. พัก 12.00 - 13.00</p>
                <p>เปิดทุกวันอังคารถึงเสาร์ หยุดวันจันทร์และอาทิตย์</p>
            </div>

            <div className="mt-8 md:mt-0 h-auto w-full md:w-72">
                <Image src={"/map-placeholder.jpg"} width={1280} height={1280} layout="responsive" />
            </div>
        </section>
    )
}

export default Contact;