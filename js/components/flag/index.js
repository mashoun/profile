import utilities from "../../utilities.js"
import store from '../../store.js'
export default {
    template: await utilities.getPage('/js/components/flag/index.html'),
    data() {
        return {
            store,
            utilities,
            flag: {
                code: '',
                src: ''
            },
            flags: [
                {
                    code: 'LB',
                    src: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB6klEQVR4nO2X0UtTURzHr5E9FIli5EsRJL0q0ptwIZ/0UVEYEi5hjSkKJQUl9TJBRBBUWkF7EQo2nbMaNNHpg1PXZpNt6JBZ2Ggum3fXzf6Cb5yTDOm5uXPi94Efl/Ny+X3O7/c79x5FIQiCIIj/AagKZAqFBFSqAKiFTlPqlgANsSr5Marnf0GmUIotoOWOYVp/ge1MUk4Ba8QJxdGKqtm7uB+wIXrwTR6B0H4C1e4u1Hsf4sqcEVfd92D59EoOgdB+Arc8vbg9/4jvfuVJjG958EPXxRbY036iL2hH87IVNz6Ycd7ZjgvTHWjyPUf5dDuM6xP4qh2IK5DMZtC9Nsl7/9KMATVz3bj2zsTXTEhdHIR9Z1FMgZSuoWttAgb/GO74nvGkWbAKsCdro8aFp1hNxcUUyOaPMRydxcUZA84529DgHUCtp4cnf9nVibqPD7hcx8oogumEeALWiBNPwm9gDrzkJxCTKHO0cQEmU+Hq5NV4/HkK6aOseAIb6V30h+xw7PpxmMujZXmo0EZLyVjh4+ZPxTG4+VY8Af1UhNNfcNNjwfX3fwbYFvf+s3frxRZgQ8oS/q5rfMdHYm683lkoVEF4Af2MQvmbUv8egy40quQXGgiQFEhALf3OglpIlXSICYIgCEKRkN92m9NywFd5fgAAAABJRU5ErkJggg==`
                },
                {
                    code: 'USA',
                    src: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+klEQVR4nO2VrQoCQRSFx5eybhAWtmkSxGLWJzD4ACbrWn0FFxQVDGKzCQo2g2lAFydZruyCFg3uMr/O+eDA3HYP9565jAEAAADAMERUCRoJyZaoVZWJ/aWBqDWn0Xj/bqBo3etvcxkxEDZndDjdKGMw3FHRut1dU3p/5MremQF+TZWJfZtAPDnSanOhemdJZerp4pzrNQHtBgLJMmIgkpgD7SEOJefAyDcaS8yB83eA685AJPkOaDUQ4g4kH3fA+QwIGKj+PgGVgdMSYm5BU9xrA0Jh4LT8QsKCpoTXBrgFe829DjF33YCwYK+F1yEWLhsAAAAAAGCleAKWmufwwWk9CQAAAABJRU5ErkJggg==`
                },
                {
                    code: 'TK',
                    src: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB1klEQVR4nO2WT0gUYRiHZxM9JKgQGCEeCsGrmhgUs5IgbQRLFJSQp91M7BZtF/Hin8NCEIG4oh3aDhHioT9EBqJ1MmqpDmJ7ywWhQhMjtUW33UemUT/3tCO1zoy9D3yHZeZ7eZ95f9/saJogCIIg7AfQNdy0NBHQZQJIhHZidySQQ6xbeAoXK+F+N8TfweI3WP0JiU/wZBDa6h08Aa8H7nXBWpI/pNMw/hBunoGzZeb1CxVwutCBAl4PjEXZ5vsX6DjpojMQuaWaX16CK9W2N49lAX85/FpWAuFA7uLGnj2IkmZJoP+Gan5+DhoLchdvPwGPbqvfzcU2Crx5oQSeDlkrfq0BMhmI9sDUczOCtgnMziiBXI2cOwThIHx4pfZ8fG1taroTBC4fg4EQxGNqT2wcGg/YKPD2pWrmccRa8avHzftH7sD7CZsjNBBSAl8T1p5msC77vPhKbRQ4fwSSK0qitzV3cf9haD6Yl6bZtYCxhjuVwI8FuHQ0783xTwWM2EyOZEcpUOMiAX1T4kEfpNZNid8peDYM109BU5F5j68kb69M/lpga7VUmf+yn6chuWp+lRoTGb0LgVoHT0B33tJEQJcJIBHaid2R4L8/xIIgCIKguZANPKAGeS46VvoAAAAASUVORK5CYII=`
                },
                {
                    code: 'SP',
                    src: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAeElEQVR4nO2YuRHAQAgDlbkZ+s8pRLXI6Y0bwNi7M+QIBPdIAAAAX8ClbAohoOhAsNDJtCXMENfyNZq+simEgKYDwUIn05YIQ9zzVQ1rtOcrGw6y3hF6Mp1Qfi/AL7gim1+JWvyg8QuSMgJqvrLGQrV0iAEAALSQG87JQyXPr+IVAAAAAElFTkSuQmCC`
                },
                {
                    code: 'QTR',
                    src: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAyElEQVR4nO2YMQrCQBBFc4L0dh7Au8ROBBvBwltYCQsi2niD2IiCfSrbNHYBCRaGgIgLS07wBUsLC5Fg3PdgDjD8/TvzJwgAAAD+AesqfVLF6aI0TrQfL7TqjGTCqJYKvtXAa+VppnV30qwGbte7jtuDdsOZ5q1esxRI40TL9qC2p2NQwL1XpDyX2vSnKGDwgPPkF7J4IGIO+D2JLR6I8MATPODYhUQesMyBijxgyMSOXUhk4pC7UOVvHsibdhstfuU6DQAAXvIANFEA5Ksoc0oAAAAASUVORK5CYII=`
                },
                {
                    code: 'SA',
                    src: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC4ElEQVR4nO2W60uTcRTH95dEVC+qF70xRaFEyzKxSLxMDM3MG8tmakma93mbOqdu6nBe0rw1p27m1JnOSxOv5NJhZkZKJoJYIfXWvvE7UAi9jUeXvy8cHp4L43ye7/ecPSIRFxcXFxfX/yAnyTE4Uok4gIQ7AB6h/TroSDjxIZYcoTUaVRqIMPkN3FeH4k6JH7KbHtJ1ZWcuYpRiBOZcQl5LCop0GWgeqkHzkBZ3Ff6IKRMjURMJce4VSNW3UdVTAnl7OtyTziJZGyscQHDuVYy+McP2YRY9kzqMLQwiSHYZ+W2pyGhMwNL6AvyzPFCqz0GxLhNrW6voGG9CtDIIA7NG1PZVwC/THTu727DM96OiuwAW24BwACM2MzXEGmAgNSYlQvK9kaSJQqulDo2D1QTF7pnnjIivDKcjg6sxlUHbV45KYxEU+mz0TXdBqg6DfvyZcACRigCKS/dEG9SGQtQPqMgBFgvWYIO5koBiy4KxuvmO4rOysQSxzAutllp6PqE6giL19fsORU032igcQFqDFKV6GVqGtdj7uYfdH99gtY+guCMLdf0qAohWimGa7sTcyiR8Ul3QNlJPrrF77BlJeQhkzcl0/mpxmOZEMADPR+eg6VUgosQPKkMhXkx1wPnecXKGRSKv5TGB/dbWl01qMP1p/B+HAnI8yQW1UY73n9+if6ZbOAA2mOytzSxbYZhopzfL4sJiEqcKpeyz+bCv2RBa6IuCtieo6M6Hb5orAcufp5M7y5/s9FvhRTfJIcEA/LM9UD+ghtVuoTyzptkqZU30TunhnXIe19PcaNtcS3GGq/QkgmReGJzrwcXEM+iytuJWgQ9c4k7QRlMZ5OSEYACHoUQcQMIdgENHiC0Cp8MA4CY9RduGrVT2bcSO+2tyaQxDr01/1cb2OhY/ztNnicM5cOHBaejG2L9yFZpeahwP4F+UiANIuAPgEdqvg46E05EfYi4uLi4uLpED6hcW9LiKeHztNwAAAABJRU5ErkJggg==`
                },
                {
                    code: 'UAE',
                    src: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAcElEQVR4nO3VsQ3EMAgFUKaKUlzF7edJI1mR3HOty5T25T2JARDwiQCAfzC+Rz2ps32WqNBAM4GyQjNH3KRQidHxhkd29XuJCg10EygrNHPEXQqVGB1veGSZuUSFBtIEygrNHHFKoRKjY+dHBgCxoR+KvePZGHXRaQAAAABJRU5ErkJggg==`
                },
                {
                    code: 'LOCK',
                    src: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABv0lEQVR4nO2YT0oDMRSHPxBE0BOIrV2Ih1APoCvBhXoHreIVFK0utGsR3FXFA6hHKbhTa11boQU7RgJvYChTpp2/Cc0HD4Yweclv3stLJuBwWEMZqAIvQBP4EWtK2z5QwmAWgGugD6gI84BHoIJhbMlX15PsAg1gG1gGZsX08w5wB/Tk3Q6wiSEcAX8ysYakVhSLwH0gOocYEAkP+AX2YvSvSl+vyMiUAukUR4TPgfj4BuYpgNtAOiXlQXzdkDNlqU7dEddEFBUpAH2pfrlRTTEaPv7iT5KmY/Msg+oSmxa74vOJHHmVQZdS9Kn3GSUngNzoyKBzKfrUvvxNMjf8o4YtfofihESgXEQmIbWmgQvgc4T/i6ytBdRkTmNzboAANWBncYS0pPMKxbMaiIz5FSSr+TghGaFcRHBrJBOUSy2SpdYMUAfacjq4kjbrIlIP2ZkvbRTSDhHyZaOQ9xAhbzYKOQkRcmyjkKkQIbrNyvKrBiwNX2PjhAxZ8EkWeuER2RAB2tYT+lLuiII7/WaCcqmFS61MUBOfWi35AvpyrGjWZC4fcTrXDLgiVQN2GkeIvjDWYvzIFGk6ElrE0Evsf2EQelGrxQnWAAAAAElFTkSuQmCC`
                },
                {
                    code: 'LOCK2',
                    src: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABzElEQVR4nO2Yv0oDQRDGPwQrfQMt1VY0oHZ3MyGtNnkOIX0gnX+4tfDPG2gj4nPYmFqxSaOdARMF4x64MnhoXDVG73KXM/vBwLHswPfbmdnjDnByckpMhUJhnJnLRHTEzBdE9MDM99GzrJVlD4ZRvu+vEdEVM5teIXtkL4ZFtVptjJk3fzJuxTMzb0hu1v7xB/PdsZGpeWmF6DS7W6TDzHu+7y+XSqUJCc/zVohon4ie7EoQ0Wom5mUY7Z4nomsimv8up1gsLhDRjT0ThSwGW24U++R7me/KW/yiEmWkreha7Dax+4vcAwv+EGmLmS8tgKV+c2UmrNxLpK3oBfVmwvO8yX5zZa8FcI+0ZV+JaefHlgNgV4H+ZbYwrRVOtEI7VDCDDK3Q1gqnnW3MJmc+QHPQxkMbJEDT7GAqNoCcfNrmw/dqHCcB0M4Q4C42QFbmwygcQOgqANdCsTSSLaQVTKMKc16BqVden3WeABpVmLP1jyFruQE4r3wGkLXcANS/AKjnCaCR9xbSEUQ9r0McJhhwAMpVwLgWGukW0gFauf6k1AqnGQKcxAboKMxphdvUzQdoPu5gBklI/s/IL4402kkHaMnJJ2beyemf6wXITRX/xbt3RgAAAABJRU5ErkJggg==`
                },
                {
                    code: 'LOCK3',
                    src: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABNElEQVR4nO2ZsUoDQRCGPystbBSiKCrmLSQRQWyMnRb6aMFKxUolla+jhV6haCGpI64c/IKFHIm3eDNmPhg42D8wH7N7GzgIgiDwxgFQAMlpFUAP5xJJ9YiBJnIVTTcQIsREmL4zMgL6QAeYV3WBU625EHkFtirurY4ypkXegW013AaugaHqCtjU2o6yZkXO1egG8PzD+hOwpsylZZFdNXlRkTlTZs+yyIKarDoDL8osWhb5oirzocyMd5E0QS79pUj5Zlri95S/vbEg0qI+yxZEchEiMRHG31rlDX8P3AHrnrfWybfcsWeROeBNNetZpORBhXeRI+DwP4iMS4jkmsgq9VmxMJGB/ivVkbi1IJKMFE03ECLERGh8+6SpOCOFgSayfLHq6cGzxH6GSzkIgiBgYj4BLFwZ58p5lyAAAAAASUVORK5CYII=`
                },
                {
                    code: 'LOCK4',
                    src: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAxUlEQVR4nO2WPQrCQBCFv17FQvA6amdI60kEsRVyIMULeAP1DImFNimineBKYAQbdxOcRYt58Kp9Ox877B+Y/BoCGXAAbsAF2AFzoE8kzYAKcB98BqYxoA8BrIER0BGPgY2M3YFUs72VFF54ckvJlMBAA5y9rTSkrWRXGuCjFKvbG9JEsnsN8FWKdRtke5Kt53wtJ46V/z04BU6e89rWBZA0AReK0JfzNq3SdlAGdtZqbHNhxwm7QNxfPxKJMjyP8e010VRPzCeH3BXJpVoAAAAASUVORK5CYII=`
                },
                {
                    code: 'LOCK-GREY',
                    src: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABDElEQVR4nO2VPUpDQRSFp9fYCG5HrTSkdRGSe6eQOycGci8v4IIUF+ASNGuIFtpYGDshkfdTiBjH+OaRZg6cag7zMWf+nMv6RedSHFDQK4Y+EOydoS8U9I6hF94Xe64L+ZGeUbA3hq1+MgV7ppGdJIcybNkArj3sUER2SpNMjhh6U4/pB4sNEtZrzUoV63IEvawywV5pPN5vDaZqT+uVRrPQ2yoLmyYA26ycrKw3lvWw4wZ83xrMQRflZMOi2I1lAfTqunXRHoz61HaV3z6YxQYMe1p3Xzc1BX1ksX4UXAUTQb94/ueqUttl8HflqjkfLuTrZPkBWf3ryaStfRJi/cTw+TBMTqPgLNeRPgE4asBl+znfDAAAAABJRU5ErkJggg==`
                }
            ]
        }
    },
    props: ['code', 'width'],
    mounted() {
        this.flags.forEach(e => {
            if (this.code == e.code) this.flag = e
        });
    }
}