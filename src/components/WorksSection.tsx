import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function WorksSection() {
  const works = [
    {
      title: "Волшебник Изумрудного города",
      year: "1939",
      genre: "Сказка",
      description:
        "Знаменитая сказка о девочке Элли и её удивительном путешествии в Волшебную страну",
      status: "Доступна",
      features: ["Аудиокнига", "Иллюстрации", "Викторина"],
    },
    {
      title: "Урфин Джюс и его деревянные солдаты",
      year: "1963",
      genre: "Сказка",
      description:
        "Продолжение приключений в Волшебной стране с новыми героями и захватывающими событиями",
      status: "Доступна",
      features: ["Аудиокнига", "Образовательные материалы"],
    },
    {
      title: "Семь подземных королей",
      year: "1964",
      genre: "Сказка",
      description:
        "Третья книга цикла о Волшебной стране, полная приключений и открытий",
      status: "Доступна",
      features: ["Интерактивная карта", "Викторина"],
    },
    {
      title: "Огненный бог Марранов",
      year: "1968",
      genre: "Сказка",
      description:
        "Четвёртая книга серии с новыми персонажами и увлекательным сюжетом",
      status: "Скоро",
      features: ["В разработке"],
    },
  ];

  return (
    <section id="works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-foreground mb-4">
            Произведения
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Откройте для себя мир сказок Александра Волкова — от классического
            «Волшебника Изумрудного города» до других удивительных историй
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {works.map((work, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="font-heading text-xl group-hover:text-primary transition-colors">
                      {work.title}
                    </CardTitle>
                    <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                      <span>{work.year}</span>
                      <span>•</span>
                      <span>{work.genre}</span>
                    </div>
                  </div>
                  <Badge
                    variant={
                      work.status === "Доступна" ? "default" : "secondary"
                    }
                  >
                    {work.status}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {work.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {work.features.map((feature, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4">
                  <div className="flex space-x-2">
                    <Button size="sm" disabled={work.status !== "Доступна"}>
                      <Icon name="BookOpen" className="mr-2 h-4 w-4" />
                      Читать
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={work.status !== "Доступна"}
                    >
                      <Icon name="Headphones" className="mr-2 h-4 w-4" />
                      Слушать
                    </Button>
                  </div>

                  <Button variant="ghost" size="sm">
                    <Icon name="ArrowRight" className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <Icon name="Library" className="mr-2 h-5 w-5" />
            Перейти в библиотеку
          </Button>
        </div>
      </div>
    </section>
  );
}
