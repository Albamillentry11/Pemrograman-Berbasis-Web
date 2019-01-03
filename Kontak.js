function tampilnama(Sel)
{
    var Nama = "";
    switch (Sel)
    {
        case "dokter1" : 
            {
                Nama = "<ul> \
                            <li>dr.Yohanes Mada Suprayogi, Sp.PD</li> \
                            <li>dr. Intan Oktaviana Adiyanto, Sp.M</li> \
                            <li>dr. Kentar Arimadyo S, Sp.M (K) M.Si.Med</li> \
                            <li>dr. Samuel Lukito, Sp.M</li> \
                            <li>dr. Liana Ekowati, Sp.M</li> \
                        </ul";
            }break;

        case "dokter2" : 
            {
                Nama = "<ul> \
                            <li>dr. Yuanita Dian Utama, Sp.KK</li> \
                            <li>dr. Hiendarto, Sp.KK</li> \
                            <li>dr. E. Suciningrum I, Sp.KK (K), FINSDV</li> \
                            <li>drg. Bambang Priyanto, Sp.BM</li> \
                            <li>dr. Bantar Suntoko, Sp.PD-KR</li> \
                        </ul";
            }break;

        case "dokter3" : 
            {
                Nama = "<ul> \
                            <li>Dr. dr. Tjipta Bahtera, Sp.A (K)</li> \
                            <li>dr. R. Rochmanadji Widayat, Sp.A</li> \
                            <li>dr. Susetyo, Sp.A</li> \
                            <li>dr. Sedyo Wahyudi, Sp.A</li> \
                            <li>dr. Winres Sapto Priambodo, Sp.A</li> \
                        </ul";
            }break;

        case "dokter4" : 
            {
                Nama = "<ul> \
                            <li>dr. Vika Puspa Adiyanti, Sp.OG</li> \
                            <li>dr. Jenny Jusuf, Sp.OG</li> \
                            <li>dr. Erwinanto, Sp.OG</li> \
                            <li>dr. Suharsono, Sp.OG</li> \
                            <li>dr. Purnomo Hartanto, Sp.OG</li> \
                        </ul";
            }break;

        case "dokter5" : 
            {
                Nama = "<ul> \
                            <li>dr. Agus Rianto</li> \
                            <li>dr. Tiurlan Pardamean Br. Sibarani</li> \
                            <li>dr. Danu Adi Prakosa Darmawan</li> \
                            <li>dr. Yulia Puspitasari</li> \
                            <li>dr. Juan Yohanes Parahum Siregar</li> \
                        </ul";
            }break;

        default : Nama = "";
    }
    document.getElementById('Nama').innerHTML =  Nama;
}