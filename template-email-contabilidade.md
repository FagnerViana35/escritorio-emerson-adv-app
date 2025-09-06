# Template de E-mail para Escritório de Contabilidade

Este é um modelo de e-mail para ser usado no EmailJS para o escritório de contabilidade.

## Template

```
Assunto: Confirmação de Agendamento - Escritório ProContábil

Prezado(a) {{from_name}},

Gostaríamos de confirmar o agendamento da sua consulta contábil para o dia {{dia}}, às {{horario}}, com o(a) contador(a) {{contador}}.

Por favor, lembre-se de trazer seus documentos fiscais, comprovantes de receitas e despesas, e quaisquer outros documentos relevantes para a sua consulta.

Em caso de dúvidas ou se precisar reagendar a consulta, entre em contato conosco o mais breve possível.

Procedimentos básicos:
Para que sua consulta contábil seja a mais produtiva e eficaz possível, é importante seguir estas orientações:
- Traga seus documentos fiscais organizados por mês;
- Caso tenha notas fiscais eletrônicas, traga-as em formato digital;
- Traga extratos bancários do período a ser analisado;
- Se você tem dúvidas específicas, anote-as para apresentar durante a consulta;
- Chegue com 15 minutos de antecedência para evitar atrasos.

Agradecemos sua cooperação e estamos à disposição para esclarecer qualquer dúvida.

Atenciosamente,
Escritório ProContábil
```

## Variáveis do Template

Este template utiliza as seguintes variáveis:

- `{{to_name}}`: Nome do destinatário (escritório)
- `{{reply_to}}`: E-mail para resposta (e-mail do cliente)
- `{{from_name}}`: Nome do cliente (obtido do formulário)
- `{{from_email}}`: E-mail do cliente
- `{{from_phone}}`: Telefone do cliente
- `{{subject}}`: Assunto da mensagem
- `{{message}}`: Conteúdo da mensagem
- `{{dia}}`: Dia do agendamento (a ser preenchido manualmente no EmailJS)
- `{{horario}}`: Horário do agendamento (a ser preenchido manualmente no EmailJS)
- `{{contador}}`: Nome do contador responsável (a ser preenchido manualmente no EmailJS)

## Instruções de Uso

1. Acesse o painel do EmailJS
2. Vá para "Email Templates"
3. Edite seu template existente ou crie um novo
4. Copie e cole o conteúdo acima
5. Substitua as variáveis conforme necessário
6. Salve o template

## Observação

Este é apenas um modelo sugerido. Você pode personalizar o conteúdo conforme as necessidades específicas do escritório de contabilidade.