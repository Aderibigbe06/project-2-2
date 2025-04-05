"use client"

import {Image, Center, Text, Box, Stack, Heading, Button} from "@chakra-ui/react"
import { useRouter } from "next/navigation";

export default function Page() {

  const router = useRouter();

  const handleNavigate = () => {
    router.push("/newPage");
    router.push("newPage2")
  };

  return (
    <>
      <Box width = "80%" maxWidth = "1200px" margin = "0 auto" background = "gray.100" borderRadius="30px" padding="10px" border = "gray.200" marginTop = "50px">
        <Center>
          <Stack justify="space-between" align="center" direction="row" width="100%" height="35px" padding="10px">
            <Image src = "/images/frame1.png" alt = "Frame1" width = "129px" height = "45px" />
            <Heading size="sm" fontFamily = "Inter" fontWeight = "600" fontSize = "20px" lineHeight = "20%" letterSpacing = "0%">Home</Heading>
            <Heading size="sm" fontFamily = "Inter" fontWeight = "600" fontSize = "20px" lineHeight = "20%" letterSpacing = "0%">Product</Heading>
            <Heading size="sm" fontFamily = "Inter" fontWeight = "600" fontSize = "20px" lineHeight = "20%" letterSpacing = "0%">Contact</Heading>
            <Heading size="sm" fontFamily = "Inter" fontWeight = "600" fontSize = "20px" lineHeight = "20%" letterSpacing = "0%" >Partner with us!</Heading>
            <Button borderRadius = "20px" width = "12%" fontSize = "15px">Get started</Button>
          </Stack>
        </Center>
      </Box>



      <div style={{ display: "flex", justifyContent: "center", position: "relative", marginTop: "70px"}}>
        <Image src="/images/frame 4.png" alt="Frame 4" width="6%" height="8%" />
      </div>



      <Center marginTop = "-50px"> 
        <Image src = "/images/frame3.png" alt = "Frame3" width = "365px" height = "226px" position = "relative" left = "70px" top = "50px"/>
      
        <Box>
          <Text width = "732px" height = "126px" font = "Ubuntu" fontWeight = "500" fontSize = "55px" lineHeight = "100%" letterSpacing = "0%" color = "#3B3B3B" textAlign = "center">
            Powering Convenience, <br />
            Fueling Sustainability.
          </Text>

          <Text width = "762px" height = "72px" font = "Poppins" fontWeight = "400" fontSize = "26px" lineHeight = "100%" letterSpacing = "0%" color = "#3B3B3B" textAlign = "center">
            Explore the best energy solution for your home or business <br />
            while finding fuel when you need it most.
          </Text>
        </Box>
      
        <Image src = "/images/frame 5.png" alt = "Frame 5" width = "279px" height = "273px" position = "relative" right = "90px" top = "-20px" />
      </Center>


    
      <div style = {{display: "flex", justifyContent: "center"}}>
        <Button borderRadius = "22px" width = "150px" height = "45px" fontSize = "18px" mb = "20">Get started</Button>
      </div>


    
      <Box background = "green.100" borderRadius = "25px" width = "93%" justifyContent = "center" style={{ margin: "0 auto", }}>
        <div style = {{paddingLeft: "120px", paddingTop: "50px", }}>
          <Text width = "485px" height = "110px" fontFamily = "Poppins" fontWeight = "500" fontSize = "50px" lineHeight = "55px" letterSpacing = "0%" >
            Eco-Friendly <br />
            Energy Product
          </Text>
        </div>

        <div style = {{paddingLeft: "120px", paddingTop: "20px"}}>
          <Text width = "675px" height = "54px" fontFamily = "Poppins" fontWeight = "400" fontSize = "18px" lineHeight = "100%" letterSpacing = "0%" >Access high-quality solar panels and energy solution that reduce your <br />
            carbon footprint
          </Text>
        </div>

        <div style={{ paddingLeft: "950px" }}>
          <Button background="green.200" borderRadius="50px" width="70px" height="70px" display="flex" alignItems="center" justifyContent="center" padding="0" onClick={handleNavigate} // ✅ This triggers the navigation 
          style={{ position: "relative", top: "-190px" }}>
            <Image src="/images/f4.png" alt="F4" width="40px" height="40px" borderRadius="50px"/>
          </Button>
        </div>

        <div style = {{position: "relative",display: "flex", justifyContent: "center", width: "100%"}}>
          <Image src = "/images/f1.png" alt = "F1" width = "80%" maxWidth = "950px" height = "auto" mb = "12" borderRadius = "20px" />
        </div>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "-26px" }}>
          <div style = {{width: "40%", marginRight: "95px", marginBottom: "50px"}}>
            <Image src = "/images/co.png" alt = "co" style = {{width: "100%", height: "60%", borderRadius: "20px" }}/>
          </div>

          <div style = {{width: "40%", marginRight: "95px", marginBottom: "50px"}}>
            <Image src = "/images/f3.png" alt = "F3" style = {{width: "100%", height: "60%", borderRadius: "20px"}} />
          </div>
        </div>
      </Box>
    


      <Box background = "orange.100" borderRadius = "25px" width = "93%" justifyContent = "center" style={{ margin: "0 auto", marginTop: "50px"  }}>
        <div style = {{paddingLeft: "120px", paddingTop: "50px", }}>
          <Text width = "430px" height = "110px" fontFamily = "Poppins" fontWeight = "500" fontSize = "50px" lineHeight = "55px" letterSpacing = "0%" >Fuel <br /> Convenience</Text>
        </div>

        <div style = {{paddingLeft: "120px", paddingTop: "20px"}}>
          <Text width = "626px" height = "54px" fontFamily = "Poppins" fontWeight = "400" fontSize = "18px" lineHeight = "100%" letterSpacing = "0%" >Locate fuel station nearby with real fuel updates when you need <br /> them </Text>
        </div>

        <div style = {{ paddingLeft: "950px" }}>
          <Button background = "orange.200" borderRadius = "50px" width = "70px" height = "70px" display = "flex" alignItems = "center" justifyContent = "center" padding = "0" style = {{ position: "relative", top: "-190px" }} onClick={handleNavigate}>
            <Image src = "/images/f5.png" alt = "F5" width = "40px" height = "40px" borderRadius = "50px"/>
          </Button>
        </div>

    
      <div style = {{position: "relative",display: "flex", justifyContent: "center", width: "100%"}}>
      <Image src = "/images/f6.png" alt = "F6" width = "75%" maxWidth = "950px" height = "auto" mb = "12" borderRadius = "20px" />
      </div>


     
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "-26px", gap: "6px", marginLeft: "85px" }}>
        <div style = {{width: "40%", marginRight: "15px", marginBottom: "50px"}}>
        <Image src = "/images/f7.png" alt = "F7" style = {{width: "100%", height: "50%", borderRadius: "20px" }}/>
        </div>

        <div style = {{width: "40%", marginRight: "95px", marginBottom: "50px"}}>
        <Image src = "/images/f8.png" alt = "F8" style = {{width: "100%", height: "50%", borderRadius: "20px"}} />
        </div>
      </div>

      

      <div style = {{display: "flex", justifyContent: "center", }}>
      <Image src = "/images/f9.png" alt = "F9" width = "27%" height = "50%" mb = "12" borderRadius = "20px" style = {{marginTop: "-480px", marginRight: "-350px", zIndex: "1"}} />
      </div>


      <div style = {{display: "flex", justifyContent: "center", }}>
      <Image src = "/images/circle.png" alt = "circle" width = "16%" height = "25%" mb = "12" borderRadius = "20px" style = {{marginTop: "-450px", marginRight: "-420px"}} />
      </div>
    </Box>
   
    

    <div style = {{display: "flex", justifyContent: "center", marginTop: "50px" }}>
    <Image src = "/images/frame 8.png" alt = "Frame 8" width = "95%" maxHeight = "900px" height = "auto" mb = "12" />
    </div>


    <div style = {{display: "flex", justifyContent: "center"}}>
    <Image src = "/images/frame 9.png" alt = "Frame 9" width = "92%" maxHeight = "400px" height = "auto" mb = "12" borderRadius = "25px"/>
    </div> 


    <div style = {{display: "flex", justifyContent: "center"}}>
    <Image src = "/images/frame10.png" alt = "Frame10" width = "95%" maxHeight = "400px" height = "auto" mb = "12" />
    </div>
   

    
    <Box background = " #F4F7FE">

    <Center>
      <div style = {{ marginTop: "50px", marginLeft: "-1000px", }}>
      <Image src = "/images/frame1.png" alt = "Frame1" width = "90%" height = "60%" />
      </div>
    </Center>
    

    <div style = {{marginLeft: "70px", marginTop: "40px"}} >
    <Image src = "/images/button.png" alt = "button" width = "10%" height = "50%" borderRadius = "30px"  />
    </div>


    <Center py = "4" style={{ marginTop: "-130px" }}>
      <Stack direction = "row" gap = "40" align = "flex-start">
        <Stack gap = "2" align = "flex-start">
          <Text fontWeight = "600" fontSize = "20px">Company</Text>
          <Text>Home</Text>
          <Text>About us</Text>
          <Text>Partner with us</Text>
        </Stack>

    
        <Stack gap = "2" align = "flex-start">
          <Text fontWeight = "600" fontSize = "20px">Products</Text>
          <Text>Eco Friendly</Text>
          <Text>Petroleum products</Text>
          <Text>EV Charging (coming soon)</Text>
          <Text>Service Technician (coming soon)</Text>
        </Stack>

    
        <Stack gap = "2" align = "flex-start">
          <Text fontWeight = "600" fontSize = "20px">Support</Text>
          <Text>Privacy Policy</Text>
          <Text>Terms</Text>
          <Text>Contact</Text>
        </Stack>

      </Stack>
    </Center>



    <div style = {{ display: "flex", justifyContent: "center" }}>
    <Image src = "/images/frame 4.png" alt = "Frame 4" width = "8%" height = "8%" />
    </div>


    <Image src = "/images/fuel.png" alt = "Fuel" width = "100%" height = "90%" />
    </Box>

    
    </>     
  );
}
