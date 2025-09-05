import { useInsighits } from "../../../hooks/useInsighits"
import "../../../index.css"
import { IconBrandDjango } from "@tabler/icons-react";

export const Coverage = () => {
    const {data, loading, error} = useInsighits();
    if (loading) return <p>Cargando...</p>
    if (error) return <p>Error</p>

    return(
        <article style={{background:"white"}}>
            <section style={{flex:"1", display:"flex", gap:"1rem", background:"#00977B"}}>
                <div style={{ padding:"1rem", width:"100%", display:"flex", gap:"0.5rem"}}>
        <div style={{justifyContent:"center", display:"flex"}}> <IconBrandDjango  
         stroke={1.75}
                  size={40}
                  color="#fff" /></div>
        <div style={{display:"flex", flexDirection:"column", gap:"0.5rem"}}>
            <div className="font-subtitle" style={{color:"#fff"}}>Resumen de indicadores</div>
            <div className="font-text" style={{color:"#D0FAE5"}}>Monitorea eficientemente el estado de tus indicadores</div>
        </div>
        
                </div>
                <div style={{ width:"100%", padding:"1rem", justifyContent:"flex-end", display:"flex", alignItems:"center"}}>
                    <div style={{width:"30%",  height:"40%", justifyContent:"center", borderRadius:"0.5rem", display:"flex", alignItems:"center", border:"1px solid gray",
                        background:"#33AB97", color:"#fff"
                    }}>Live Data</div>
                </div>
            </section>
            <section style={{background:"#ECFAF3"}}>
                {/*Cards */}
                <article style={{flexWrap:"wrap", display:"flex", gap:"1rem", padding:"1rem"}}>
                    <div style={{flex:" 1 1 300px", borderRadius:"1rem", padding:"1rem", background:"#F0FAF5", 
                    boxShadow:"0 4px 6px #dee0dfff",
                        display:"flex", flexDirection:"column", gap:"1em"}}>
<div className="font-text" style={{color:"#007A55", fontWeight:"600"}}>COBERTURA</div>
<div style={{display:"flex", gap:"1rem", alignItems:"end"}}>
    <div className="font-subtitle" style={{color: "#004F3B"}}>94%</div>
    <div style={{height:"80%", display:"flex", gap:"0.5rem", alignItems:"center", background:"#D0FAE5", borderRadius:"0.5rem",
        padding:"0.2rem 0.5rem", 
    }}>
        <div style={{display:"flex", alignItems:"center",}}><IconBrandDjango  stroke={1.75}
                  size={20}
                  color="#007A55"/></div>
        <div className="font-text-min" style={{color:"#007A55"}}>+4.2%</div>
    </div>
</div>
<div style={{width:"100%", background:"#EFFDF6", borderRadius:"1rem", height:"10px"}}>
    <div style={{width:"90%", background:"#3A3A3A", height:"10px", borderRadius:"1rem"}}></div>
</div>
<div className="font-text-min" style={{color:"#007A55"}}>TArget: 90% | CURRENT: 94%</div>
                    </div>
                    <div style={{flex:" 1 1 300px", background:"red"}}>2</div>
                    <div style={{flex:" 1 1 300px", background:"orange"}}>3</div>
                </article>

                {/*tabla and grafica */}
                <article></article>
                
            </section>


        </article>
        
    )

}