export default function AboutUsLayout({ aboutus, category }){ 
    return ( 
        <div> 
            <section>
                { aboutus }
            </section>

            <section>
                { category }
            </section>
        </div>
    )
}