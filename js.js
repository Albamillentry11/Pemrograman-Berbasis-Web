var jam=10;

if(jam>=6 && jam<=12)
    if(jam>=8.40 && jam<=10.20)
        document.write("OPERASIONAL JAM BESUK PASIEN");
        else
            document.write("PAGI");
    else if(jam>12 && jam<=15)
        document.write("SIANG");
        else if(jam>15 && jam<=18)
            document.write("SORE");
            else if(jam>18 && jam<=24)
                document.write("MALAM");