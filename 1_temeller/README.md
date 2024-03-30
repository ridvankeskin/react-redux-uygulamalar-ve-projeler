# State Yönetimi

- State: Uygulamadaki bileşenlerin sahip olduğu bilgi ve özellikler.

- Prop Drilling: Bileşnlerin yukarında aşağıya veri taşıması.

- Context: Uygulamadki state'i bütün bileşenler tarafından erişlebilen ve oluşturdğumuz merkezlerden yönettiğimiz state yönetim aracı.

- Redux: Bileşenlerin sahip olduğu ve merkezi olarak tutlması gereken state'lerin yönetildiği merkezi state yönetim aracı.

# Neden Context yerine Redux ?

- Kod tekrarını önler-
- Permansı daha iyi
- Bileşen içerismdeki karışıklığı azaltır
- Hata ayıklama daha kolaydır
- Orta ve büyük ölçekli projelerde state yönetmini daha kolay hale getirir

# Redux ile ilgili bilinmesi gerekenler

- Store: Uygulamanın bütün bileşenleri tarafında erişlebilen ve yönetilebilen state deposu

- Reducer: Akisyondan aldığı talimata göre store'da tutulan state'in nasıl değişceğine karar veren fonksiyon

- Action: Store'daki state'i güncellemek için reduce'a gönderdiğimiz nesne. (emir | haber | eylem)

- Action iki değere bir nesnedir:
  type (zorunlu): Action'ın görevini tanımlayan string
- payload (opsiyonel): Action'ın verisi
- Dispatch (Sevketmek): Action'un gerçekleştiğ'ini reducer'a haber veren method

- Subscribe (Abone Olmak): Bileşen'leirn store'da tutalan veriye erişimini sağlaması. (useContext,useSelector)

- Provider (Sağlayıcı): Store'da tutuylan veileri uygulamaya sağlar.

# Gerçek Hayattan Benzetme

- - Store: Okul Binası

- Reducer: Okulun Yönetim Ekibi (Müdür, Müdür Yard.)

- Action: "Öğrenci Sınavı Geçmesi" | "Yeni Öğrencini Kayıt Yapması" | "Öğrencinin Okuldan Atılması"

- Dispatch (Sevketmek): Öğrenci İşleri | Öğretmen

- Subscribe (Abone Olmak): Rehberlik Servisi | E-Okul

- Provider (Sağlayıcı): Okul Aile Birliği | MEB

# Redux Kurulum Aşamaları

- redux ve react-redux paketlerini indir
- reducer / reducer'ların kurlumunu yap
- store'un kurlumunu yap
- store'u projeye tanıt

# Proje geliştiştirirken sıklıkla karşılaştığımız hatalar

- Yapılan güncelleme ekrana yansır ama sayfa yenilenince kaybolur
- state doğru güncellendi
- api yanlış güncellendi
- Yapılan güncelleme ekrana yansımaz sayfa yenilenince düzelir
- state yanlış güncellendi
- api doğru güncellendi

# REDUX CRUD

<h2>kullanılan teknolojiler</h2>

React Redux

<h2>GİF</h2>

![](redux-crud.gif)
