// src/components/ui/form/SkillsForm.tsx
import { useEffect, useRef } from "react";
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Button,
  List,
  ListItem,
  FormErrorMessage,
} from "@chakra-ui/react";
import { skills } from "@/data/skills";
import Clipboard from "clipboard";
import { roles } from "@/data/roles";

export default function SkillsForm() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();
  const copyButtonRef = useRef<HTMLButtonElement>(null);

  const selectedCategory = watch("category");
  const selectedRole = watch("role");
  const selectedSubrole = watch("subrole");

  // Obtener habilidades basadas en el subrol seleccionado
  const filteredSkills = skills.filter(
    (skill) =>
      skill.categories.includes(selectedCategory) &&
      skill.roles.includes(selectedRole) &&
      skill.subroles.includes(selectedSubrole)
  );

  useEffect(() => {
    if (copyButtonRef.current) {
      new Clipboard(copyButtonRef.current, {
        text: () => filteredSkills.map((skill) => skill.name).join(", "),
      });
    }

    filteredSkills.forEach((skill) => {
      const skillButtonRef = document.getElementById(`copy-${skill.name}`);
      if (skillButtonRef) {
        new Clipboard(skillButtonRef, {
          text: () => skill.name,
        });
      }
    });
  }, [filteredSkills]);

  return (
    <FormControl isInvalid={!!errors.skills}>
      <FormLabel>Tecnologías o habilidades específicas</FormLabel>
      <Input placeholder="Ej: GitHub, Vercel, etc." {...register("skills")} />
      <FormErrorMessage>{errors.skills?.message?.toString()}</FormErrorMessage>
      {filteredSkills.length > 0 && (
        <Box mt={4}>
          <FormLabel>Habilidades recomendadas</FormLabel>
          <List spacing={3}>
            {filteredSkills.map((skill) => (
              <ListItem key={skill.name} display="flex" alignItems="center">
                {skill.name}
                <Button ml={2} size="sm" id={`copy-${skill.name}`}>
                  Copiar
                </Button>
              </ListItem>
            ))}
          </List>
          <Button ref={copyButtonRef} mt={2}>
            Copiar todas las habilidades
          </Button>
        </Box>
      )}
    </FormControl>
  );
}
