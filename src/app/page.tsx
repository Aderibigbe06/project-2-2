"use client"

import {Image, Center, Text, Box, Stack, Heading, Button, Link, List, Flex, Icon} from "@chakra-ui/react"
import { useRouter } from "next/navigation";
import { FaApple, FaGooglePlay } from 'react-icons/fa';

export default function Page() {

  const router = useRouter();

  const handleNavigate = () => {
    router.push("/newPage");
    // router.push("newPage2");
    // router.push("/contact");
    // router.push("/partner");
  };

  return (
    <>
      <Box width = "80%" maxWidth = "1200px" margin = "0 auto" background = "gray.100" borderRadius="30px" padding="10px" border = "gray.200" marginTop = "50px">
        <Center>
          <Stack justify="space-between" align="center" direction="row" width="100%" height="35px" padding="10px">
            <Image src = "/images/frame1.png" alt = "Frame1" width = "129px" height = "45px" />
            <Heading size="sm" fontFamily = "Inter" fontWeight = "600" fontSize = "20px" lineHeight = "20%" letterSpacing = "0%">Home</Heading>
            <Link href = "/newPage2"><Heading size="sm" fontFamily = "Inter" fontWeight = "600" fontSize = "20px" lineHeight = "20%" letterSpacing = "0%">Product</Heading> </Link>
            <Link href = "/contact"> <Heading size="sm" fontFamily = "Inter" fontWeight = "600" fontSize = "20px" lineHeight = "20%" letterSpacing = "0%">Contact</Heading> </Link>
            <Link href = "/partner"><Heading size="sm" fontFamily = "Inter" fontWeight = "600" fontSize = "20px" lineHeight = "20%" letterSpacing = "0%">Partner with us!</Heading> </Link>
            <Button borderRadius = "20px" width = "12%" fontSize = "15px">Get started</Button>
          </Stack>
        </Center>
      </Box>



      <div style = {{ display: "flex", justifyContent: "center", position: "relative", marginTop: "70px"}}>
        <Image src = "/images/frame 4.png" alt = "Frame 4" width = "6%" height = "8%" />
      </div>



      <Center marginTop = "-50px"> 
        <Image src = "/images/frame3.png" alt = "Frame3" width = "365px" height = "226px" position = "relative" left = "70px" top = "50px"/>
      
        <Box>
          <Text width = "732px" height = "126px" font = "Ubuntu" fontWeight = "500" fontSize = "55px" lineHeight = "100%" letterSpacing = "0%" color = "#3B3B3B" textAlign = "center">
            Powering Convenience, <br />
            Fueling Sustainability.
            <Text as = "span"></Text>
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

        <div style = {{ paddingLeft: "950px" }}>
          <Button background = "green.200" borderRadius = "50px" width = "70px" height = "70px" display = "flex" alignItems = "center" justifyContent = "center" padding = "0"  onClick = {handleNavigate} style = {{ position: "relative", top: "-190px" }}>
            <Image src = "/images/f4.png" alt = "F4" width = "40px" height = "40px" borderRadius = "50px"/>
          </Button>
        </div>  


        <Center>
          <Flex direction = "column" align = "center" w = "100%">
            <Box background = "black" width = "85%" height = "auto" borderRadius = "25px" padding = "40px" position = "relative" overflow = "hidden" mb = "30px">
              <Box width = "100%" display = "flex" justifyContent="flex-start" marginBottom="30px" marginTop="-10px">
                <Image src="/images/i10.png" alt="i10" width="40px" height="auto" />
              </Box>

              <Flex zIndex={2}>
              <Box flex={1} marginLeft="10px">
                <Text color="white" fontFamily="Poppins" fontWeight="500" fontSize="30px" lineHeight="100%" letterSpacing="0%">
                  Why Go Green?
                </Text>

                <Text color="white" fontFamily="Poppins" fontWeight="400" fontSize="18px" lineHeight="140%" letterSpacing="0%" marginTop="10px">
                  Switching to renewable energy not only helps the <br />
                  environment but also benefits you:
                </Text>

                <List.Root color="white" marginTop="20px" gap={2}>
                  <List.Item fontFamily="Poppins" fontSize="16px" lineHeight="150%">
                    Lower energy bills with sustainable energy option.
                  </List.Item>
                  <List.Item fontFamily="Poppins" fontSize="16px" lineHeight="150%">
                    Gain independence with home battery storage and <br />
                    uninterrupted power.
                  </List.Item>
                  <List.Item fontFamily="Poppins" fontSize="16px" lineHeight="150%">
                    Contribute to reducing global carbon emissions.
                  </List.Item>
                </List.Root>
              </Box>

              <Box position="absolute" top={70} right={80} width="250px" height="auto">
                <Image src="/images/i8.png" alt="i8" width="100%" height="auto" />
              </Box>

              <Box width="50%" height="50%">
                <Image src="/images/i9.png" alt="i9" width="100%" height="auto" borderRadius="20px" />
              </Box>
              </Flex>
            </Box>
        
      
            <Flex width="85%" gap="30px"  mb = "40px">
              <Box background="#0B6B00" width="50%" borderRadius="25px" display="flex" flexDirection="column" alignItems="center" padding="2rem" backgroundImage="url('/images/i11.png')" backgroundSize="cover" backgroundRepeat="no-repeat" backgroundPosition="center">
                <Image src="/images/i12.png" alt="i12" width="60%" height="auto" marginBottom="1rem"/>
          
              <Text fontFamily="Poppins" fontWeight="500" fontSize="30px" lineHeight="100%" letterSpacing="0%" textAlign="center" color="white" marginBottom="1rem">
                Solutions Tailored to You
              </Text>
          
              <Text fontFamily="Poppins" fontSize="16px" lineHeight="100%" color="white">
                Our range of renewable energy products is designed to <br />
                meet the unique needs of homes and businesses, <br />
                ensuring efficiency and sustainability every step of the <br />
                way.
              </Text>
              </Box>
        
       
              <Box background="#D0EFCC" width="50%" borderRadius="25px" display="flex" flexDirection="column" justifyContent="center" alignItems="center" padding="2rem">
                <Image src="/images/i13.png" alt="i13" width="60%" height="auto" marginBottom="1.5rem"/>
          
              <Text fontFamily="Poppins" fontWeight="500" fontSize="30px" lineHeight="100%" letterSpacing="0%" marginBottom="10px">
                Making a Difference Together
              </Text>
          
              <Text fontFamily="Poppins" fontSize="16px" lineHeight="100%">
                Do you know? By switching to solar energy, you can <br />
                reduce greenhouse gas emissions by up to 80% <br />
                compared to traditional energy sources. FuelFinder is <br />
                proud to partner with individuals and businesses <br />
                committed to sustainability.
              </Text>
              </Box>
            </Flex>
          </Flex>
        </Center>
      </Box>





      <Box background = "orange.100" borderRadius = "25px" width = "93%" justifyContent = "center" style={{ margin: "0 auto", marginTop: "50px"  }}>
        <div style = {{paddingLeft: "120px", paddingTop: "50px", }}>
          <Text width = "430px" height = "110px" fontFamily = "Poppins" fontWeight = "500" fontSize = "50px" lineHeight = "55px" letterSpacing = "0%" >
            Fuel <br /> 
            Convenience
          </Text>
        </div>

        <div style = {{paddingLeft: "120px", paddingTop: "20px"}}>
          <Text width = "626px" height = "54px" fontFamily = "Poppins" fontWeight = "400" fontSize = "18px" lineHeight = "100%" letterSpacing = "0%" >
            Locate fuel station nearby with real fuel updates when you need <br /> them 
          </Text>
        </div>

        <div style = {{ paddingLeft: "950px" }}>
          <Button background = "orange.200" borderRadius = "50px" width = "70px" height = "70px" display = "flex" alignItems = "center" justifyContent = "center" padding = "0" style = {{ position: "relative", top: "-190px" }} onClick={handleNavigate}>
            <Image src = "/images/f5.png" alt = "F5" width = "40px" height = "40px" borderRadius = "50px"/>
          </Button>
        </div>

        <Flex direction="column" align="center" w="100%">
          <Box background="white" width="85%" height="auto" borderRadius="25px" padding="40px" position="relative" overflow="hidden" mb="30px">
            <Box width="100%" display="flex" justifyContent="flex-start" marginBottom="30px" marginTop="-10px">
              <Image src="/images/i10.png" alt="i10" width="40px" height="auto" />
            </Box>

            <Flex zIndex={2}>
              <Box flex={1} marginLeft="10px">
                <Text color="black" fontFamily="Poppins" fontWeight="500" fontSize="30px" lineHeight="100%" letterSpacing="0%">
                  Locate Fuel in Seconds
                </Text>

                <Text color="black" fontFamily="Poppins" fontWeight="400" fontSize="18px" lineHeight="140%" letterSpacing="0%" marginTop="10px">
                  Our user-friendly platform helps you locate the <br />
                  nearest fuel station based on your location <br />
                  or your preferred area.
                </Text>
              </Box>

              <Box position="absolute" top = "-40px" right="10px" width="50%" height="auto">
                <Image src="/images/f16.png" alt="f16" width="100%" height="auto" />
              </Box>

              <Box width="50%" height="50%">
                <Image src="/images/i14.png" alt="i14" width="100%" height="auto" borderRadius="20px" />
              </Box>
            </Flex>
          </Box>
      

          <Flex width="85%" gap="30px" mb = "40px">
            <Box background="#FAA24B" width="50%" borderRadius="25px" display="flex" flexDirection="column" alignItems="center" padding="2rem" backgroundImage="url('/images/i15.png')" backgroundSize="cover" backgroundRepeat="no-repeat" backgroundPosition="center">
              <Image src="/images/i16.png" alt="i16" width="60%" height="auto" marginBottom="1rem"/>
          
            <Text fontFamily="Poppins" fontWeight="500" fontSize="30px" lineHeight="100%" letterSpacing="0%" textAlign="center" color="white" marginBottom="1rem">
              Fueling Your Day, Anywhere <br />
              Anytime
            </Text>
          
            <Text fontFamily="Poppins" fontSize="16px" lineHeight="100%" color="white">
              Whether you are on a cross-country road trip or <br />
              commuting to work, FuelFinder ensures that you are never far <br />
              from a solution.
            </Text>
            </Box>
        

            <Box background="black" width="50%" borderRadius="25px" padding="2rem" position="relative" minHeight="300px">
              <Box position="absolute" top="30px" right="-10px" zIndex="1">
                <Image src="/images/f9.png" alt="F9" width="70%" height="auto" borderRadius="20px"/>
              </Box>
      
              <Box position="absolute" top="55px" right="70px">
                <Image src="/images/circle.png" alt="circle" width="75%" height="auto" />
              </Box>
      
              <Flex direction="column" justifyContent="flex-end" alignItems="center" height="100%" pb="4" >
                <Text color="white" fontFamily="Poppins" fontWeight="500" fontSize="30px" lineHeight="100%" letterSpacing="0%" marginBottom="15px" textAlign="center">
                  Real-Time Updates
                </Text>
        
                <Text color="white" fontFamily="Poppins" fontSize="16px" lineHeight="100%">
                  See the most up-to-dates locations and availability of <br />
                  nearby stations.
                </Text>
              </Flex>
            </Box> 
          </Flex>
        </Flex>
      </Box>
   
   
    

      <div style = {{display: "flex", justifyContent: "center", marginTop: "50px" }}>
        <Image src = "/images/frame 8.png" alt = "Frame 8" width = "95%" maxHeight = "900px" height = "auto" mb = "12" />
      </div>


    


      <Box background = "#003399" marginLeft="50px" width="93%" height="100%" borderRadius="25px" padding="40px" position="relative" overflow="hidden" marginBottom = "50px">
        <Box width="100%" display="flex" justifyContent="flex-start" marginBottom="30px" marginTop="-10px">
            <Image src="/images/i10.png" alt="i10" width="40px" height="auto" />
          </Box>

          <Text fontFamily="Poppins" fontWeight="500" fontSize="50px" lineHeight="59px" letterSpacing="0%" color = "white">
            <Text as = "span" color = "yellow.500">Trusted by </Text>Movers, <br />
              Shakers,
            <Text as = "span" color = "yellow.500"> and </Text> <br />
              Planet Savers!
          </Text>


          <Box position="absolute" top = "-40px" right="10px" width="100%" height="auto">
            <Image src="/images/i17.png" alt="i17" width="100%" height="auto" />
          </Box>


          <Box position="absolute" top = "-40px" right="10px" width="100%" height="auto" >
            <Image src="/images/i18.png" alt="i18" width="100%" height="auto" zIndex = {1} opacity={0.15}/>
          </Box>
      </Box>





      
      <Box width = "100%" background="linear-gradient(88.81deg, rgba(255, 230, 142, 0) -0.15%, #F3F8FF 33.24%, #FFFFFF 64.13%, #F4F9FF 78.87%, #F8F3E7 109.42%)" textAlign = "center" marginBottom = "50px"  px="20px" py="30px">
        <Text fontFamily="Ubuntu" fontWeight="500" fontSize="55px" lineHeight="100%" letterSpacing="0%" marginBottom = "20px">
          Ready to Join the Energy <br/>
          Revolution?
        </Text>

        <Text fontFamily="Poppins" fontWeight="400" fontSize="24px" lineHeight="100%" letterSpacing="0%" marginBottom = "30px">
          Take the first step to a sustainable and efficient future. <br />
          Explore our renewable energy solutions today.
        </Text>

        <Flex  gap="20px" mb = "40px">
          <Button borderRadius="40px" width = "20%" height = "auto" size = "lg" padding = "12px" marginLeft = "400px">
            <Icon as={FaApple} boxSize="10" color="white"/>
            <Text>Download on the <br />
              App Store</Text>
          </Button>

          <Button  borderRadius="40px" width = "20%" height = "auto" size = "lg" padding = "12px">
            <Icon as={FaGooglePlay} boxSize="10" color="white"/>
            <Text>Google Play<br />
            </Text>
          </Button>
          </Flex>
        </Box>
   

    
    
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
