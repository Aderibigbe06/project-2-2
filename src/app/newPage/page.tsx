import { Box, Heading, Center, Stack, Button, Image, Text } from "@chakra-ui/react";

export default function newPage() {
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



    
    <Box background = "green.100" borderRadius = "25px" width = "93%" justifyContent = "center" style={{ margin: "0 auto", marginTop: "50px"}}>
        <div style = {{paddingLeft: "140px", paddingTop: "50px", }}>
        <Text width = "531px" height = "165px" fontFamily = "Poppins" fontWeight = "500" fontSize = "50px" lineHeight = "55px" letterSpacing = "0%">
            Eco-Friendly Energy <br />
            Solution for a <br />
            Greener Tomorrow
        </Text>
        </div>

        <div style = {{paddingLeft: "140px", paddingTop: "20px"}}>
        <Text width = "531px" height = "54px" fontFamily = "Poppins" fontWeight = "400" fontSize = "18px" lineHeight = "100%" letterSpacing = "0%">
            Discover renewable energy products designed to power <br />
            your home and business sustainably
        </Text>
        </div>

        <div style = {{marginLeft: "800px", marginTop: "-200px"}}>
        <Image src = "/images/frame 5.png" alt = "Frame 5" width = "279px" height = "273px" position = "relative" right = "90px" top = "-20px" />
        </div>

        <div style = {{paddingLeft: "140px", position: "relative", top: "-60px" }}>
        <Button borderRadius = "20px" width = "12%" fontSize = "15px" >Get started</Button>
        </div>
    </Box>

   
    
    <div style = {{paddingTop: "50px", paddingLeft: "150px",}}>
    <Image src = "/images/f13.png" alt = "F13" width = "90&" height = "60%" />
    </div>



    <Box background="#FDF2FF" borderRadius="25px" width="83%" style={{ margin: "0 auto", marginTop: "55px", padding: "50px 100px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ maxWidth: "50%" }}>
            <Text fontFamily="Poppins" fontWeight="500" fontSize="50px" lineHeight="55px" mb="4">
                Solar Panels
            </Text>

            <Text fontFamily="Poppins" fontWeight="400" fontSize="18px" lineHeight="24px">
                High-efficiency panels to harness the power of the sun <br />
                and reduce your electric bills
            </Text>
            </div>

            <div style={{ maxWidth: "45%" }}>
            <Image src="/images/f14.png" alt="F14" width="90%" height="60%" />
            </div>
        </div>
    </Box>
    


    <Box background = "green.100" borderRadius = "25px" width = "93%" justifyContent = "center" style={{ margin: "0 auto", marginTop: "50px"}}>
        <div style = {{position: "relative",display: "flex", justifyContent: "center", width: "100%", }}>
        <Image src = "/images/f1.png" alt = "F1" width = "80%" maxWidth = "950px" height = "auto"  mb = "12" mt = "10" borderRadius = "20px" />
        </div>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "-26px" }}>
            <div style = {{width: "40%", marginRight: "20px", marginBottom: "50px"}}>
            <Image src = "/images/co.png" alt = "co" style = {{width: "100%", height: "60%", borderRadius: "20px" }}/>
            </div>

            <div style = {{width: "40%", marginBottom: "50px"}}>
            <Image src = "/images/f3.png" alt = "f3" style = {{width: "100%", height: "60%", borderRadius: "20px"}} />
            </div>
        </div>
    </Box>



    <div style = {{display: "flex", justifyContent: "center", marginTop: "50px"}}>
    <Image src = "/images/frame 9.png" alt = "Frame 9" width = "93%" maxHeight = "400px" height = "auto" mb = "12" borderRadius = "25px"/>
    </div>


        
    <div style = {{display: "flex", justifyContent: "center"}}>
    <Image src = "/images/frame10.png" alt = "Frame10" width = "95%" maxHeight = "400px" height = "auto" mb = "12" />
    </div>



    <Box background = " #F4F7FE" >
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