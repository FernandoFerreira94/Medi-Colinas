"use client";
import { useState } from "react";
import { Content } from "@/componente/content";
import { Title } from "@/componente/title";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";

export default function Register() {
  const [formData, setFormData] = useState({
    nome_completo: "",
    funcao: "",
    matricula: "",
    cpf: "",
    permissao_energia: false,
    permissao_agua: false,
    permissao_gas: false,
    is_adm: false,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSwitchChange = (id: string, checked: boolean) => {
    setFormData((prevData) => ({
      ...prevData,
      [id]: checked,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      funcao: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Dados prontos para envio:", formData);
    // Aqui você usaria sua mutação para enviar 'formData' para o Supabase
  };

  const testSupabaseConnection = async () => {
    try {
      const { data, error } = await supabase
        .from("usuarios")
        .select("*")
        .limit(1);

      if (error) {
        console.error("Erro ao testar a conexão:", error);
        alert("Erro ao conectar com o banco de dados. Verifique a console.");
        return;
      }

      if (data) {
        console.log(
          "Conexão com o Supabase bem-sucedida! Dados de teste:",
          data
        );
        alert("Conexão com o Supabase bem-sucedida!");
      }
    } catch (err) {
      console.error("Erro inesperado:", err);
      alert("Erro inesperado. Verifique a console.");
    }
  };

  return (
    <Content>
      <Title text="Cadastrar Usuário" />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-xl gap-4 mt-8"
      >
        <div className="grid w-full items-center gap-3">
          <Label htmlFor="nome_completo">Nome Completo</Label>
          <Input
            placeholder="Digite o nome completo"
            id="nome_completo"
            type="text"
            name="nome_completo"
            value={formData.nome_completo}
            onChange={handleInputChange}
          />
        </div>
        <div className="grid w-full items-center gap-3">
          <Label htmlFor="funcao">Função</Label>
          <Select onValueChange={handleSelectChange}>
            <SelectTrigger className="">
              <SelectValue placeholder="Selecione a função" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="coordenador">Coordenador</SelectItem>
              <SelectItem value="M2">M2 - Supervisor</SelectItem>
              <SelectItem value="M9">M9 - Eletromecânico</SelectItem>
              <SelectItem value="M7">M7 - Líder</SelectItem>
              <SelectItem value="M5">M5 - Eletricista</SelectItem>
              <SelectItem value="M4">M4 - Serviços Gerais</SelectItem>
              <SelectItem value="bravo">Bombeiro</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid w-full items-center gap-3">
          <Label htmlFor="matricula">Número de Matrícula</Label>
          <Input
            placeholder="Digite o número da matrícula"
            id="matricula"
            type="text"
            name="matricula"
            value={formData.matricula}
            onChange={handleInputChange}
          />
        </div>
        <div className="grid w-full items-center gap-3">
          <Label htmlFor="cpf">CPF</Label>
          <Input
            placeholder="Digite o CPF"
            id="cpf"
            type="text"
            name="cpf"
            value={formData.cpf}
            onChange={handleInputChange}
          />
        </div>
        <Label>Permissões de Medição</Label>
        <div className="flex items-center gap-4">
          <div className="flex items-center space-x-2">
            <Switch
              id="permissao_energia"
              checked={formData.permissao_energia}
              onCheckedChange={(checked) =>
                handleSwitchChange("permissao_energia", checked)
              }
            />
            <Label htmlFor="permissao_energia">Energia</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="permissao_agua"
              checked={formData.permissao_agua}
              onCheckedChange={(checked) =>
                handleSwitchChange("permissao_agua", checked)
              }
            />
            <Label htmlFor="permissao_agua">Água</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="permissao_gas"
              checked={formData.permissao_gas}
              onCheckedChange={(checked) =>
                handleSwitchChange("permissao_gas", checked)
              }
            />
            <Label htmlFor="permisssao_gas">Gás</Label>
          </div>
        </div>
        <div className="flex items-center space-x-2 mt-4">
          <Switch
            id="is_adm"
            checked={formData.is_adm}
            onCheckedChange={(checked) => handleSwitchChange("is_adm", checked)}
          />
          <Label htmlFor="is_adm">Usuário Administrador</Label>
        </div>
        <Button type="submit" variant="default">
          Cadastrar
        </Button>
      </form>
    </Content>
  );
}
