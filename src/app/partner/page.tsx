"use client"

import {Image, Center, Text, Box, Stack, Heading, Button, Field, Input, Textarea, NativeSelect, Flex, Icon, SimpleGrid,} from "@chakra-ui/react"
import { FaApple, FaGooglePlay } from 'react-icons/fa';

export default function partner() {
    return(
        <>
        <Box width = "80%" maxWidth = "1200px" margin = "0 auto" background = "gray.100" borderRadius="30px" padding="10px" border = "gray.200" marginTop = "50px">
            <Center>
                <Stack justify="space-between" align="center" direction="row" width="100%" height="35px" padding="10px">
                    <Image src = "/images/frame1.png" alt = "Frame1" width = "129px" height = "45px" />
                    <Heading size="sm" fontFamily = "Inter" fontWeight = "600" fontSize = "20px" lineHeight = "20%" letterSpacing = "0%">Home</Heading>
                    <Heading size="sm" fontFamily = "Inter" fontWeight = "600" fontSize = "20px" lineHeight = "20%" letterSpacing = "0%">Product</Heading>
                    <Heading size="sm" fontFamily = "Inter" fontWeight = "600" fontSize = "20px" lineHeight = "20%" letterSpacing = "0%">Contact</Heading>
                    <Heading size="sm" fontFamily = "Inter" fontWeight = "600" fontSize = "20px" lineHeight = "20%" letterSpacing = "0%" color = "red.600">Partner with us!</Heading>
                    <Button borderRadius = "20px" width = "12%" fontSize = "15px">Get started</Button>
                </Stack>
            </Center>
        </Box>



        <Box background = "#EFF4FF" borderRadius="25px" width="93%" style={{ margin: "0 auto", marginTop: "55px", padding: "50px 100px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ maxWidth: "50%" }}>
                    <Text width = "531px" height = "110px" fontFamily = "Poppins" fontWeight = "500" fontSize = "50px" lineHeight = "55px" letterSpacing = "0%" mb = "10px">
                        Together, We Can Do <br /> More
                    </Text>
                
                    <Text width = "531px" height = "108px" fontFamily = "Poppins" fontWeight = "400" fontSize = "18px" lineHeight = "100%" letterSpacing = "0%">
                        When you partner with FuelFinder, you are joining a <br />
                        community that is passionate about innovation, <br />
                        sustainability and making life easier for everyone. Let's <br />
                        grow your business and create real impact.
                    </Text>
                </div>
                
                <div style={{ maxWidth: "45%", }}>
                    <Image src="/images/i4.png" alt="i4" width="90%" height="60%" />
                </div>

            </div>

            <div style = {{paddingLeft: "2px", position: "relative", top: "-30px" }}>
                <Button borderRadius = "20px" width = "15%" fontSize = "15px" >Get started</Button>
            </div>
        </Box>



       
        <Center>
            <Box display = "flex" flexDirection = "row" justifyContent = "center" alignItems = "stretch" gap = "20px" marginTop = "50px">
    
                <Box background = "#003399" style = {{ borderRadius: "30px", textAlign: "center", padding: "30px 20px", width: "320px", minHeight: "360px", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                    <Text fontFamily = "Poppins" fontWeight = "500" fontSize = "24px" lineHeight = "40px" color = "white">
                        Expand Your Reach
                    </Text>

                    <Text fontFamily = "Poppins" fontWeight = "400" fontSize = "16px" lineHeight = "24px" color = "white" marginTop = "10px">
                        Your business, front and center. With <br />
                        thousands of users searching daily, we will <br />
                        help you attract a wider audience who <br />
                        need your services—fast.
                    </Text>

                    <div style = {{ maxWidth: "80%", margin: "20px auto 0 auto" }}>
                        <Image src = "/images/i5.png" alt = "i5" width = "100%" />
                    </div>
                </Box>

   
                <Box background = "#F79F48" style = {{ borderRadius: "30px", textAlign: "center", padding: "30px 20px", width: "320px", minHeight: "360px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <Text fontFamily = "Poppins" fontWeight = "500" fontSize = "24px" lineHeight = "40px" color = "white">
                        Drive Sustainable Growth
                    </Text>

                    <Text fontFamily = "Poppins" fontWeight = "400" fontSize = "16px" lineHeight = "24px" color = "white" marginTop = "10px">
                        Join the renewable energy revolution and <br />
                        position your business as a future-ready <br />
                        leader. Together, we will make eco-friendly <br />
                        energy accessible for everyone.
                    </Text>

                    <div style = {{ maxWidth: "80%", margin: "20px auto 0 auto" }}>
                        <Image src="/images/i6.png" alt="i6" width="100%" />
                    </div>
                </Box>


                <Box background = "#970706" style = {{ borderRadius: "30px", textAlign: "center", padding: "30px 20px", width: "320px", minHeight: "360px", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                    <Text fontFamily = "Poppins" fontWeight = "500" fontSize = "24px" lineHeight = "40px" color = "white">
                        Boost Your Brand Visibility
                    </Text>

                    <Text fontFamily = "Poppins" fontWeight = "400" fontSize = "16px" lineHeight = "24px" color = "white" marginTop = "10px">
                        FuelFinder is not just a platform—it is a <br />
                        community. Get featured on our <br />
                        homepage, newsletter and our social <br />
                        channels to grow your brand presence <br />
                        effortlessly.
                    </Text>

                    <div style = {{ maxWidth: "80%", margin: "20px auto 0 auto" }}>
                        <Image src = "/images/i7.png" alt = "i7" width = "100%" />
                    </div>
                </Box>
            </Box>
        </Center>




        <Box textAlign = "center" marginTop = "50px">
            <Text fontFamily = "Ubuntu" fontWeight="500" fontSize="55px" lineHeight="100%" letterSpacing="0%"  marginBottom = "20px">
                Ready to Join the <br />
                Movement?</Text>

            <Text fontFamily="Poppins" fontWeight="400" fontSize="24px" lineHeight="100%" letterSpacing="0%">
                Fill out the form below, and let's start building something <br />
                amazing together!
            </Text>
        </Box>


 

        <Box style={{ width: "80%", borderRadius: "35px", backgroundColor: "#FFFFFF", margin: "0 auto", padding: "2rem", }}>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap ="1.5rem">
                <Field.Root>
                    <Field.Label>Full Name</Field.Label>
                    <Input placeholder="What should we call you?" />
                </Field.Root>

                <Field.Root>
                    <Field.Label>Email Address</Field.Label>
                    <Input placeholder="Where should we reply you?" />
                </Field.Root>

                <Field.Root>
                    <Field.Label>Business Type</Field.Label>
                    <Input placeholder="Select business type" />
                </Field.Root>

                <Field.Root>
                    <Field.Label>Business/Company Name</Field.Label>
                    <Input placeholder="Your company name?" />
                </Field.Root>

                <Field.Root>
                    <Field.Label>Phone Number</Field.Label>
                    <Input placeholder="How can we call you?" />
                </Field.Root>

                <Field.Root>
                    <Field.Label>Location</Field.Label>
                    <Input placeholder="Where are you based?" />
                </Field.Root>
            </SimpleGrid>

            <Field.Root>
                <Field.Label>Tell Us About Your Business</Field.Label>
                <Input placeholder = "What do you do? How can we collaborate?" />
            </Field.Root>

            <div style = {{paddingLeft: "5px", position: "relative", top: "30px" }}>
                <Button borderRadius = "20px" width = "100%" fontSize = "15px">Send Message</Button>
            </div>
        </Box>





        <Box background = "#003399" marginLeft="50px" width="93%" height="100%" borderRadius="25px" padding="40px" position="relative" overflow="hidden" marginBottom = "50px" marginTop = "50px">
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
                        App Store
                    </Text>
                </Button>
                        
                <Button  borderRadius="40px" width = "20%" height = "auto" size = "lg" padding = "12px">
                    <Icon as={FaGooglePlay} boxSize="10" color="white"/>
                    <Text>
                        Google Play
                    </Text>
                </Button>
            </Flex>
        </Box>
                



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
    )
}