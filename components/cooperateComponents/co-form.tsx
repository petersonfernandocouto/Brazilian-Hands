import Image from "next/image";
import React, { useState } from "react";
import ApplyIMG from "../../public/assets/apply.jpg";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { useTranslations } from "next-intl";
import Swal from "sweetalert2";

interface CoFormData {
  name: string;
  whatsapp: string;
  city: string;
  eircode: string;
  street: string;
  district: string;
  houseNumber: string;
  skills: string;
}

const CoForm = () => {
  const t = useTranslations("coForm");
  const a = useTranslations("alerts");
  const [coFormData, setCoFormData] = useState<CoFormData>({
    name: "",
    whatsapp: "",
    city: "",
    eircode: "",
    street: "",
    district: "",
    houseNumber: "",
    skills: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setCoFormData({
      ...coFormData,
      [e.target.id]: e.target.value,
    });
  };

  const handleTextAreaChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setCoFormData({
      ...coFormData,
      [e.target.id]: e.target.value,
    });
  };

  const handleCityChange = (value: string) => {
    setCoFormData({ ...coFormData, city: value });
  };

  const validateForm = (): boolean => {
    return (
      coFormData.name !== "" &&
      coFormData.whatsapp !== "" &&
      coFormData.city !== "" &&
      coFormData.eircode !== "" &&
      coFormData.street !== "" &&
      coFormData.district !== "" &&
      coFormData.houseNumber !== "" &&
      coFormData.skills !== ""
    );
  };
  const handleSubmit = async () => {
    if (!validateForm()) {
      Swal.fire({
        title: a("ops"),
        text: a("checkFields"),
        icon: "error",
        confirmButtonText: a("ok"),
        confirmButtonColor: "#16a34a",
      });
      return;
    }

    const message = `Hi! I'd like to be part of the Brazilian Hands Cooperative team:

*Full Name:* ${coFormData.name}
*WhatsApp:* ${coFormData.whatsapp}

*Services I perform:* ${coFormData.skills}

*My address in Ireland:*
- *City:* ${coFormData.city}
- *Eircode:* ${coFormData.eircode}
- *Street:* ${coFormData.street}
- *District:* ${coFormData.district}
- *House Number:* ${coFormData.houseNumber}

Thank you and I await your response!`;

    const whatsappUrl = `https://wa.me/353833471038?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");

    // Enviar mensagem para o Discord
    try {
      const discordWebhookUrl =
        "https://discord.com/api/webhooks/1288456738714026044/kSnKDxhBJ8r3vxUGdSCOZ3PQJMtPj5xaF8OXzZgSEZ4kTB3CRmHonHkIa6LHZzu1IelL";
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

    setCoFormData({
      name: "",
      whatsapp: "",
      city: "",
      eircode: "",
      street: "",
      district: "",
      houseNumber: "",
      skills: "",
    });
  };

  return (
    <div className="flex flex-col lg:flex-row w-full ">
      <div className="w-full lg:h-[848px] hidden lg:flex">
        <Image
          className=" w-full"
          src={ApplyIMG}
          alt="hero-img"
          quality={100}
        />
      </div>

      <div className="lg:w-full w-full bg-blue-500 flex items-center justify-center py-14 px-4">
        <div className="mx-4 flex flex-col items-center justify-center lg:items-start mt-10">
          <p className="text-center lg:text-start text-white font-bold pb-5">
            {t("letsWork")}
          </p>

          <div className="flex flex-col lg:w-[560px]">
            <h1 className="pb-5 text-4xl text-center text-white lg:text-4xl lg:text-start font-semibold">
              {t("beMember")}
            </h1>

            <form
              id="apply"
              className="text-white"
              method="post"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <div className="grid w-full items-center gap-4">
                <div className="flex gap-2">
                  <div className="flex flex-col gap-3 w-full">
                    <Label>{t("fullName")}</Label>
                    <Input
                      id="name"
                      type="text"
                      value={coFormData.name}
                      onChange={handleInputChange}
                      placeholder={t("fullNamePlaceholder")}
                      className="bg-white text-black"
                    />
                  </div>
                  <div className="flex flex-col gap-3 w-full">
                    <Label>{t("whatsapp")}</Label>
                    <Input
                      id="whatsapp"
                      type="text"
                      value={coFormData.whatsapp}
                      onChange={handleInputChange}
                      placeholder={t("whatsappPlaceholder")}
                      className="bg-white text-black"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3 w-full">
                  <Label> {t("city")}</Label>
                  <Select onValueChange={handleCityChange}>
                    <SelectTrigger className="bg-white text-black">
                      <SelectValue placeholder={t("cityPlaceholder")} />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="Cork">Cork</SelectItem>
                      <SelectItem value="Dublin">Dublin</SelectItem>
                      <SelectItem value="Galway">Galway</SelectItem>
                      <SelectItem value="Limerick">Limerick</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-2">
                  <div className="flex flex-col gap-3 w-full">
                    <Label>{t("eircode")}</Label>
                    <Input
                      id="eircode"
                      type="text"
                      value={coFormData.eircode}
                      onChange={handleInputChange}
                      placeholder={t("eircodePlaceholder")}
                      className="bg-white text-black placeholder:capitalize"
                    />
                  </div>
                  <div className="flex flex-col gap-3 w-full">
                    <Label> {t("street")}</Label>
                    <Input
                      id="street"
                      type="text"
                      value={coFormData.street}
                      onChange={handleInputChange}
                      placeholder={t("streetPlaceholder")}
                      className="bg-white text-black"
                    />
                  </div>
                </div>

                <div className="flex gap-2">
                  <div className="flex flex-col gap-3 w-full">
                    <Label> {t("district")}</Label>
                    <Input
                      type="text"
                      id="district"
                      value={coFormData.district}
                      onChange={handleInputChange}
                      placeholder={t("districtPlaceholder")}
                      className="bg-white text-black"
                    />
                  </div>
                  <div className="flex flex-col gap-3 w-full">
                    <Label> {t("houseNumber")}</Label>
                    <Input
                      type="text"
                      id="houseNumber"
                      value={coFormData.houseNumber}
                      onChange={handleInputChange}
                      placeholder={t("houseNumberPlaceholder")}
                      className="bg-white text-black"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3 w-full">
                  <Label>{t("skills")}</Label>
                  <Textarea
                    id="skills"
                    value={coFormData.skills}
                    onChange={handleTextAreaChange}
                    rows={6}
                    className="bg-white text-black"
                    placeholder={t("skillsPlaceholder")}
                  />
                </div>
              </div>

              <Button className="bg-yellow-400 text-black flex justify-center items-center lg:justify-start hover:bg-yellow-500 px-8 py-6 rounded-full font-semibold lg:text-lg mt-6 lg:mb-11">
                {t("apply")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoForm;
