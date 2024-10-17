import { Button } from "@/components/ui/button";
import InputMask from "react-input-mask";
import { useInView } from "react-intersection-observer";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

interface FormData {
  name: string;
  phone: string;
  skills: string;
  otherService: string;
  city: string;
  eircode: string;
  street: string;
  district: string;
  houseNumber: string;
}

function FormWorkUs() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    skills: "",
    city: "",
    otherService: "",
    eircode: "",
    street: "",
    district: "",
    houseNumber: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleCityChange = (value: string) => {
    setFormData({ ...formData, city: value });
  };

  const validateForm = (): boolean => {
    return (
      formData.name !== "" &&
      formData.phone !== "" &&
      formData.skills !== "" &&
      formData.city !== "" &&
      formData.eircode !== "" &&
      formData.street !== "" &&
      formData.district !== "" &&
      formData.houseNumber !== ""
    );
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      alert("Please, fill in all fields!");
      return;
    }


    //checar esta linha de codigo abaixo, está sendo utilizada?
    const message = `Hello! I came across the Brazilian Hands website and I'd like to request a service: 

*Name:* ${formData.name}
*Phone:* ${formData.phone}
"Skills" ${formData.skills}

*My address:*
- *City:* ${formData.city}
- *Eircode:* ${formData.eircode}
- *Street:* ${formData.street}
- *District:* ${formData.district}
- *House Number:* ${formData.houseNumber}

Thanks!`;

    const whatsappUrl = `https://wa.me/5588997652020?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");

    // Enviar mensagem para o Discord
    try {
      const discordWebhookUrl =
        "https://discord.com/api/webhooks/1288456722352177153/GMs-ePR7U7aLyHePFS6OqZcs0uFDBjaRDw9iem1vEMd6NRDcTMo1Hp02KrZxBiWzlZFj";
      await fetch(discordWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: message }),
      });
      console.log("Mensagem enviada para o Discord!");
    } catch (error) {
      console.error("Erro ao enviar mensagem para o Discord:", error);
    }
  };

  // Usando o hook useInView para o formulário
  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: true,
  });

  return (
    <div className="flex justify-center items-center h-screen lg:gap-16">
      <div
        ref={formRef} // Observando este elemento
        className={`flex z-10 lg:w-[400px]  justify-center lg:pr-10 items-center lg:justify-start lg:items-end lg:mt-10 lg:mb-10 pb-10 transition-all duration-1000 ${
          formInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
        }`}
      >
        <Card className="w-[350px] lg:w-[400px] bg-[#E4F0FF]">
          <CardHeader>
            <CardTitle className="font-bold text-2xl">Join Our Team</CardTitle>
          </CardHeader>

          <CardContent>
            <form>
              <div className="grid w-full items-center gap-2">
                <div className="flex flex-col gap-2">
                  <Input
                    id="name"
                    typeof="text"
                    placeholder="Your name"
                    className="bg-white "
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  <InputMask
                    mask="+353 99 9999 9999"
                    id="phone"
                    placeholder="Your phone number"
                    className="bg-white flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="flex flex-col">
                  <Input
                    id="skills"
                    placeholder="Skills"
                    className="bg-white"
                    value={formData.skills}
                    onChange={handleInputChange}
                  />

                </div>
                <div className="flex flex-col">
                  <Select onValueChange={handleCityChange}>
                    <SelectTrigger id="city" className="bg-white">
                      <SelectValue placeholder="Where do you live?" />
                    </SelectTrigger>

                    <SelectContent position="popper">
                      <SelectItem className="cursor-pointer" value="Cork">
                        Cork
                      </SelectItem>
                      <SelectItem className="cursor-pointer" value="Dublin">
                        Dublin
                      </SelectItem>
                      <SelectItem className="cursor-pointer" value="Galway">
                        Galway
                      </SelectItem>
                      <SelectItem className="cursor-pointer" value="Limerick">
                        Limerick
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-2">
                  <Input
                    id="eircode"
                    type="text"
                    placeholder="Eircode"
                    className="bg-white w-1/2 uppercase placeholder:capitalize"
                    value={formData.eircode}
                    onChange={handleInputChange}
                  />

                  <Input
                    type="text"
                    id="street"
                    placeholder="Street"
                    className="bg-white w-1/2"
                    value={formData.street}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="flex gap-2">
                  <Input
                    id="district"
                    type="text"
                    placeholder="District"
                    className="bg-white w-1/2"
                    value={formData.district}
                    onChange={handleInputChange}
                  />

                  <Input
                    type="text"
                    id="houseNumber"
                    placeholder="House number"
                    className="bg-white w-1/2"
                    value={formData.houseNumber}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </form>
          </CardContent>

          <CardFooter>
            <Button
              onClick={handleSubmit}
              className="bg-[#FDE047] text-black hover:bg-yellow-400 w-full h-[50px] rounded-2xl justify-center items-center"
            >
              Apply Now
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default FormWorkUs;
